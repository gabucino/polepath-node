const User = require('../models/users')
const Polemove = require('../models/polemoves')
const ObjectId = require('mongodb').ObjectID

const jwt = require('jsonwebtoken')
const { jsonSecret } = require('../config/keys')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const bunnies = require('../util/bunny')

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

exports.moveProgressChange = async (req, res, next) => {
  try {
    const userId = req.body.userId
    const polemoveId = req.body.polemoveId
    const mastered = req.body.mastered

    const polemove = await Polemove.find({ _id: polemoveId })

    const user = await User.findById(userId)
    const userCurrentMoves = user.polemoves

    //Index will be -1 if no match found or array length is 0
    const index = userCurrentMoves.findIndex(
      (polemove) => polemove.move.toString() === polemoveId
    )
    console.log(userCurrentMoves)
    if (
      (mastered === 'null' && index === -1) ||
      (userCurrentMoves[index] &&
        mastered == userCurrentMoves[index].userMoveData.mastered.toString())
    ) {
      console.log('NO CHANGES CODE RAN')
      return res.status(200).json({
        message: 'No changes added',
      })
    }
    //removing move from user
    if (mastered === null) {
      console.log('DELETION CODE RAN')

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
        user: user,
      })
    }

    //Update existing value
    if (index !== -1) {
      console.log('UPDATE CODE RAN')

      const updatedUser = await User.findOneAndUpdate(
        { _id: userId, 'polemoves.move': polemoveId },
        {
          $set: {
            polemoves: {
              move: polemoveId,
              userMoveData: {
                mastered: mastered,
                //TODO CHECK IF USERNOTES DONT GET LOST
              },
            },
          },
        },
        { new: true }
      )
      console.log(updatedUser.polemoves[index])
      return res.status(200).json({
        message: 'Move status changed',
        userMoveData: updatedUser.polemoves[index].userMoveData,
      })
    }

    //adding new move to user
    console.log('CREATE CODE RAN')

    const addedMove = {
      move: polemoveId,
      userMoveData: {
        mastered: mastered,
      },
      userNotes: [],
    }

    user.polemoves.push(addedMove)
    const updatedUser = await user.save()

    // const userWithPolemoveData = await User.findById(userId).populate({
    //   path: 'polemoves.move',
    // })

    const newIndex = updatedUser.polemoves.findIndex(
      (polemove) => polemove.move.toString() === polemoveId
    )

    return res.status(200).json({
      message: 'Move added succesfully',
      userMoveData: updatedUser.polemoves[newIndex].userMoveData,
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
    const userId = req.user._id
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
          updatedUserMoveData: userMoveData,
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

exports.deleteNote = async (req, res, next) => {
  const userId = req.user._id
  const polemoveId = req.body.polemoveId
  const noteId = req.body.noteId

  //finding that note arr
  const user = await User.findById(userId)
  console.log('USER FOUND:', user.polemoves)

  const polemove = user.polemoves.find(
    (el) => el.move.toString() === polemoveId.toString()
  )
  console.log('I GOT THIS FAR:', polemove)

  const notes = polemove.userMoveData.userNotes
  console.log('NOTES:', notes)
  const noteIndex = notes.findIndex(
    (el) => el._id.toString() === noteId.toString()
  )

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }

  const updatedUser = await user.save()

  console.log('RESULT:', updatedUser.polemoves[0].userMoveData.userNotes)

  return res.status(200).json({
    message: 'boring response',
    notes: notes,
  })
}

//Add progressphoto

exports.addProgressPhoto = async (req, res, next) => {
  try {
    console.log('POLEMOVEID:', req.body.polemoveId)
    const image = req.file
    console.log('IMAGE RECIEVED:', image)

    if (!image) {
      return res.status(422).json({
        message: 'Attached file is not an image',
      })
    }

    const bunnyData = {
      fileName: image.filename,
      userId: req.user._id,
      polemoveId: req.body.polemoveId
    }

    bunnies.upload(bunnyData)

    return res.status(200).json({
      message: 'Recieved photo',
    })

    // //Multer generates imageurl
    //     const imageUrl = req.file.path
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
