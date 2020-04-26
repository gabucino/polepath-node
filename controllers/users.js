const User = require('../models/users')
const Polemove = require('../models/polemoves')
const ObjectId = require('mongodb').ObjectID

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

  const userWithPolemoveData = await User.findById(req.user._id).populate({
    path: 'polemoves.move',
  })

  res.status(200).json({
    token: token,
    role: req.user.role,
    message: 'Login Successful',
    userData: {
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      photoURL: req.user.photoURL,
      polemoves: userWithPolemoveData.polemoves,
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
    const polemoveId = ObjectId(req.body.polemoveId)
    const mastered = req.body.mastered

    const polemove = await Polemove.find({ _id: polemoveId })

    const user = await User.findById(userId)
    const userCurrentMoves = user.polemoves

    let isMasteredAlready
    for (let i = 0; i < userCurrentMoves.length; i++) {
      if (userCurrentMoves[i].move.toString() === polemoveId.toString()) {
        console.log('I found a match')
        isMasteredAlready = userCurrentMoves[i].userMoveData.mastered
      }
    }

    if (
      (mastered === null && isMasteredAlready === undefined) ||
      mastered === isMasteredAlready
    ) {
      return res.status(200).json({
        message: 'No changes added',
        user: user,
      })
    }

    if (mastered === null) {
      const updatedUser = await User.updateOne(
        { _id: userId },
        {
          $pull: {
            polemoves: {
              move: polemoveId,
            },
          },
        }
      )
      console.log('Move succesfully removed from user')
      return res.status(200).json({
        message: 'Move removed from user',
        user: updatedUser,
      })
    }

    if (isMasteredAlready === undefined) {
      const addedMove = {
        move: polemoveId,
        userMoveData: {
          mastered: mastered,
        },
        userNotes: [],
      }

      user.polemoves.push(addedMove)
      await user.save()

      const userWithPolemoveData = await User.findById(userId).populate({
        path: 'polemoves.move',
      })

      return res.status(200).json({
        message: 'Move added succesfully',
        user: userWithPolemoveData,
      })
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId, 'polemoves.move': polemoveId },
      {
        $set: {
          polemoves: {
            move: polemoveId,
            userMoveData: {
              mastered: mastered,
            },
          },
        },
      }
    )

    res.status(200).json({
      message: 'Move status changed',
      user: updatedUser,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.addNote = async (req, res, next) => {
  try {
    const userId = req.body.userId
    const polemoveId = req.body.polemoveId
    const note = req.body.note

    const user = await User.findById(userId)

    for (let polemove of user.polemoves) {
      const polemoveIdString = polemove.move.toString()

      if (polemoveIdString === polemoveId) {
        const userMoveData = polemove.userMoveData
        userMoveData.userNotes.push({ text: note })
        const updatedUser = await user.save()
        return res.status(200).json({
          message: 'Note added',
          polemove: userMoveData
        })
      }
    }
    return res.status(404).json({
      message: 'Sorry, move not found with this user',
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
