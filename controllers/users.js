const User = require('../models/users')
const Polemove = require('../models/polemoves')

const jwt = require('jsonwebtoken')
const { jsonSecret } = require('../config/keys')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')


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

    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const hashedPw = await bcrypt.hash(password, 12)
    const user = new User({
      email: email,
      username: username,
      password: hashedPw,
    })
    const createdUser = await user.save()

    const token = signToken(createdUser)
    res
      .status(201)
      .json({ message: 'User created', token: token, user: createdUser })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.login = async (req, res) => {
  console.log(console.log('Current user is:' + req.user))
  const token = signToken(req.user)
  console.log('REQ USER:', req.user)

  const userWithPolemoveData = await User.findById(req.user._id).populate({path: 'polemoves.move'})

  res.status(200).json({
    token: token,
    role: req.user.role,
    message: 'Login Successful',
    userData: {
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      photoURL: req.user.photoURL,
      polemoves: userWithPolemoveData.polemoves
    },
  })
}

exports.logout = (req, res) => {
  //handle with passport
  res.status(201).json({
    message: 'Logged out',
  })
}

exports.secret = (req, res) => {
  res.json({ secret: 'resource' })
}

//Moves

exports.addMoveToUser = async (req, res, next) => {
  try {
    const userId = req.body.userId
    const polemoveId = req.body.polemoveId

    const mastered = req.body.mastered

    const polemove = await Polemove.find({_id: polemoveId})
    console.log('POLEMOVE:', polemove)

    console.log(('USERID:', userId))

    const addedMove = {
      move: polemoveId,
      mastered: mastered
    }
    const user = await User.findById(userId)

    console.log('USER FOUND', user)
    user.polemoves.push(addedMove)

    await user.save()
    const userWithPolemoveData = await User.findById(userId).populate({path: 'polemoves.move'})
    console.log(userWithPolemoveData.polemoves)

    res.status(200).json({
      message: 'Move added succesfully',
      user: userWithPolemoveData,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
