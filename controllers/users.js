const User = require('../models/users')
const Polemove = require('../models/polemoves')
const ObjectId = require('mongodb').ObjectID

const jwt = require('jsonwebtoken')
const { jsonSecret } = require('../config/keys')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const bunnies = require('../util/bunny')
const moment = require('moment')
//Finding correct polemove

const findMove = async () => {
  const userId = req.user._id
  const polemoveId = req.body.polemoveId

  const user = await User.findById(userId)
}

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
    path: 'polemoves.refId',
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
    const userId = req.user
    const polemoveId = req.body.polemoveId
    const mastered = req.body.mastered

    const polemove = await Polemove.find({ _id: polemoveId })

    const user = await User.findById(userId)
    const userCurrentMoves = user.polemoves

    //Index will be -1 if no match found or array length is 0
    const index = userCurrentMoves.findIndex(
      (polemove) => polemove.refId.toString() === polemoveId
    )
    console.log(userCurrentMoves)
    if (
      (mastered === 'null' && index === -1) ||
      (userCurrentMoves[index] &&
        mastered == userCurrentMoves[index].mastered.toString())
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
              refId: polemoveId,
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
        { _id: userId, 'polemoves.refId': polemoveId },
        {
          $set: {
            polemoves: {
              refId: polemoveId,
              mastered: mastered,
            },
          },
        },
        { new: true }
      )
      console.log(updatedUser.polemoves[index])
      return res.status(200).json({
        message: 'Move status changed',
        userMoveData: updatedUser.polemoves[index],
      })
    }

    //adding new move to user
    console.log('CREATE CODE RAN')

    const addedMove = {
      refId: polemoveId,
      mastered: mastered,
    }

    user.polemoves.push(addedMove)
    const updatedUser = await user.save()

    // const userWithPolemoveData = await User.findById(userId).populate({
    //   path: 'polemoves.refId',
    // })

    const newIndex = updatedUser.polemoves.findIndex(
      (polemove) => polemove.refId.toString() === polemoveId
    )

    return res.status(200).json({
      message: 'Move added succesfully',
      userMoveData: updatedUser.polemoves[newIndex],
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

    const foundMove = user.polemoves.find(
      (move) => move.refId.toString() === polemoveId
    )

    if (!foundMove) {
      return res.status(404).json({
        message: 'Sorry, move not found with this user',
      })
    }

    foundMove.notes.push({ text: note })
    await user.save()
    return res.status(200).json({
      message: 'Note added',
      updatedUserMoveData: foundMove.notes,
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
    (el) => el.refId.toString() === polemoveId.toString()
  )
  console.log('I GOT THIS FAR:', polemove)

  const notes = polemove.notes
  console.log('NOTES:', notes)
  const noteIndex = notes.findIndex(
    (el) => el._id.toString() === noteId.toString()
  )

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }

  const updatedUser = await user.save()

  const foundMove = updatedUser.polemoves.find(
    (move) => move.refId.toString() === polemoveId
  )

  return res.status(200).json({
    message: 'boring response',
    notes: foundMove.notes,
  })
}

//Add progressphoto

exports.addProgressPhoto = async (req, res, next) => {
  try {
    console.log('POLEMOVEID:', req.body.polemoveId)
    const image = req.file
    const polemoveId = req.body.polemoveId
    const photodate = req.body.date
    console.log(photodate)
    console.log('IMAGE RECIEVED:', image)

    if (!image) {
      return res.status(422).json({
        message: 'Attached file is not an image',
      })
    }

    const user = await User.findById(req.user._id)

    const polemove = user.polemoves.find(
      (el) => el.refId.toString() === polemoveId.toString()
    )

    // const date = moment(req.body.date).format('YYYY MM DD')
    const extension = image.mimetype.split('/').pop()
    polemove.photos.push({ date: req.body.date, extension: extension })

    await user.save()

    //Setting up for bunny upload
    const picId = polemove.photos[polemove.photos.length - 1]._id.toString()

    const bunnyFileName = `${picId}.${extension}`

    const bunnyData = {
      fsFileName: image.filename,
      bunnyFileName: bunnyFileName,
      path: `users/${req.user._id}/${polemoveId}/progressphotos`,
    }

    bunnies.upload(bunnyData)

    return res.status(200).json({
      message: 'Photo uploaded to DB',
      photos: polemove.photos,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
