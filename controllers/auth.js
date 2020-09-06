const User = require('../models/users')
const Polemove = require('../models/polemoves')

const ObjectId = require('mongodb').ObjectID
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

const jwt = require('jsonwebtoken')
const { jsonSecret } = require('../config/keys')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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',
    },
  })
)

const mail = `<h1>${this.subject}</h1>
  <div style="background-color:black">
  <p>Testing this out</p>
  </div>`

// Auth
signToken = (user) => {
  return jwt.sign(
    {
      iss: 'polepath',
      sub: user._id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1), //plus one day
    },
    jsonSecret
  )
}

exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }

    const stageName = req.body.stageName
    const email = req.body.email
    const password = req.body.password

    const hashedPw = await bcrypt.hash(password, 12)
    const user = new User({
      email: email.toLowerCase(),
      stageName: stageName,
      password: hashedPw,
    })
    const createdUser = await user.save()

    const token = signToken(createdUser)
    res
      .status(201)
      .json({ message: 'User created', token: token, user: createdUser })

    // transporter.sendMail({
    //   to: email,
    //   from: 'welcome@polepath.com',
    //   subject: 'Welcome to PolePath!',
    //   html: mail,
    // })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.checkForErrors = async (req, res, next) => {
  const email = req.body.email

  const user = await User.findOne({ email: email.toLowerCase() })

  if (!user) {
    return res
      .status(400)
      .json({ message: 'No account found with this e-mail address.' })
  }
  next()
}

exports.login = async (req, res) => {
  const token = signToken(req.user)

  //Getting user and all moves from DB
  const user = await User.findById(req.user._id)
  const allPolemoves = await Polemove.find()

  //Creating one big array containing all polemove data
  const polemoveWithUserdata = allPolemoves.map((el) => {
    const currentMove = user.polemoves.find(
      (userMove) => userMove.refId.toString() === el._id.toString()
    )

    //el : original move data - NEED _ID
    //currentMove: usermoveData _ NO NEED ID


    if (currentMove) {
      return {
        ...currentMove.toObject(),
        ...el.toObject(),
      }
    }
    return el.toObject()
  })

  // console.log(polemoveWithUserdata)

  res.status(200).json({
    message: 'Login Successful',
    token: token,
    role: user.role,
    stageName: user.stageName,
    email: user.email,
    photoURL: user.profilePic
      ? `https://polepath.b-cdn.net/users/${user._id}/profilepics/${user.profilePic}`
      : '',
    polemoves: polemoveWithUserdata,
  })
}

exports.logout = (req, res) => {
  //handle with passport
  res.status(201).json({
    message: 'Logged out',
  })
}
