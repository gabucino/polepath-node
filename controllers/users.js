const User = require('../models/users')
const Polemove = require('../models/polemoves')
const Media = require('../models/media')
const ObjectId = require('mongodb').ObjectID

const jwt = require('jsonwebtoken')
const { jsonSecret } = require('../config/keys')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const bunnies = require('../util/bunny')
const moment = require('moment')

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
      email: email,
      stageName: stageName,
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

  const user = await User.findById(req.user._id)

  // const userWithPolemoveData = await User.findById(req.user._id).populate({
  //   path: 'polemoves.refId',
  // })

  const generalPolemoves = await Polemove.find()

  //Returning Polemove info

  const newPolemoves = user.polemoves.map((el) => {
    const currentMove = generalPolemoves.find((genEl) => genEl._id.toString() === el.refId.toString())

    if (currentMove) {
      return {
        userData: { ...el.toObject() },
        generalData: { ...currentMove.toObject() },
      }
    }
  })



  console.log(newPolemoves)

  res.status(200).json({
    message: 'Login Successful',
    token: token,
    role: req.user.role,
    stageName: user.stageName,
    email: user.email,
    photoURL: user.photoURL,
    polemoves: newPolemoves
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
    const polemoveId = req.body.polemoveId
    const photodate = req.body.date
    const privacy = req.body.privacy
    const category = req.body.category

    const image = req.file
    const extension = image.mimetype.split('/').pop()

    if (!image) {
      return res.status(422).json({
        message: 'Attached file is not an image',
      })
    }
    const user = await User.findById(req.user._id)

    //DB photos upload
    const photo = new Media({
      category: 'photo',
      privacy: privacy,
      extension: extension,
      date: req.body.photodate,
      userRef: user._id,
      polemoveRef: polemoveId,
    })

    const createdMedia = await photo.save()

    const polemove = user.polemoves.find(
      (el) => el.refId.toString() === polemoveId.toString()
    )

    polemove.photos.push(createdMedia)

    await user.save()

    //Bunny upload
    const picId = createdMedia._id.toString()

    const bunnyFileName = `${picId}.${extension}`

    const bunnyData = {
      fsFileName: image.filename,
      bunnyFileName: bunnyFileName,
      path: `users/${req.user._id}/${polemoveId}`,
    }

    await bunnies.upload(bunnyData)

    //Public DB uload
    if (privacy === 'public') {
      const publicPolemove = await Polemove.findById(polemoveId)
    }
    console.log('THAT SHIT', polemove.photos[0])
    //Response

    const userPhotos = await Media.find({
      polemoveRef: polemoveId,
      userRef: req.user._id,
    })
    const newPhotos = userPhotos.map((el) => ({
      _id: el._id,
      date: moment(el.date.getTime()).format('D MMMM YYYY'),
      path: `https://polepath.b-cdn.net/users/${req.user._id}/${polemoveId}/${el._id}.${el.extension}`,
    }))

    return res.status(200).json({
      message: 'Photo uploaded',
      photos: newPhotos,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
