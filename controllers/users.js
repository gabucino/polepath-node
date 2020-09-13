const User = require('../models/users')
const Polemove = require('../models/polemoves')
const Media = require('../models/media')
const History = require('../models/history')
const MoveProgress = require('../models/moveProgress')

const progressService = require('../services/progress')

const ObjectId = require('mongodb').ObjectID
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

const jwt = require('jsonwebtoken')
const { jsonSecret } = require('../config/keys')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const bunny = require('../util/bunny')
const helpers = require('../util/helpers')
const moment = require('moment')
const fs = require('fs')

exports.changeStageName = async (req, res, next) => {
  const newName = req.body.stageName

  const existingName = await User.findOne({ stageName: newName })

  if (existingName) {
    return res.status(409).json({
      message: 'That stage name is not available, please pick another one',
    })
  }

  await User.findByIdAndUpdate(req.user._id, { stageName: newName })

  res.status(200).json({
    message: 'Stage name change successful',
  })
}

exports.changeAvatar = async (req, res, next) => {
  try {
    const profilePic = req.file
    const extension = profilePic.mimetype.split('/').pop()
    if (!profilePic) {
      return res.status(422).json('Attached file is not an image.')
    }

    const timestamp = Date.now()

    await User.findByIdAndUpdate(req.user._id, {
      profilePic: `${timestamp}.${extension}`,
    })

    // let pic;

    // let pic = fs.readFileSync(profilePic);

    // const pic = new File([myBlob], `${timestamp}.${extension}`,  { type: profilePic.mimetype, });

    const bunnyData = {
      fsFileName: profilePic.filename,
      bunnyFileName: `${timestamp}.${extension}`,
      path: `users/${req.user._id}/profilepics`,
      // pic: pic
    }

    await bunny.upload(bunnyData)

    return res.status(200).json({
      message: 'Your Profile Picture has been changed. Fab!',
      photoURL: `https://polepath.b-cdn.net/users/${req.user._id}/profilepics/${timestamp}.${extension}`,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
//Moves

//Progress handling controllers
exports.startProgress = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)

    const newMove = {
      refId: req.body.polemoveId,
      mastered: req.body.mastered,
    }

    user.polemoves.push(newMove)
    const updatedUser = await user.save()

    const historyType = req.body.mastered ? 'mastered' : 'started'

    helpers.createHistory(
      historyType,
      ObjectId(req.user._id),
      ObjectId(req.body.polemoveId)
    )

    return res.status(200).json({
      message: 'Move added succesfully',
      updatedMove: updatedUser.polemoves[updatedUser.polemoves.length - 1],
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
  }
}

exports.updateProgress = async (req, res, next) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.user._id, 'polemoves.refId': req.body.polemoveId },
    {
      $set: {
        polemoves: {
          refId: req.body.polemoveId,
          mastered: req.body.mastered,
        },
      },
    },
    { new: true }
  )

  const updatedMove = updatedUser.polemoves.find(
    (move) => move.refId.toString() === req.body.polemoveId.toString()
  )

  const historyType = req.body.mastered ? 'mastered' : 'started'

  helpers.createHistory(
    historyType,
    ObjectId(req.user._id),
    ObjectId(req.body.polemoveId)
  )

  if (!req.body.mastered) {
    //deleting mastered record on setting back

    await History.deleteMany({
      userRef: ObjectId(req.user._id),
      polemoveRef: ObjectId(req.body.polemoveId),
      type: 'mastered',
    })
  }

  return res.status(200).json({
    message: `Mastered is now ${updatedMove.mastered}`,
    updatedMove: updatedMove,
  })
}

exports.resetProgress = async (req, res, next) => {
  console.log('somehow I hit the reset shit even though i shouldnt have????????')
  const updatedUser = await User.findByIdAndUpdate(req.user._id, {
    $pull: {
      polemoves: {
        refId: req.body.polemoveId,
      },
    },
  })

  const mediaFiles = await Media.find({
    userRef: req.user._id,
    polemoveRef: req.body.polemoveId,
  })

  //Removing file from bunny
  bunny.deleteFolder(req.user._id, req.body.polemoveId)

  //removing media&history records
  await Media.deleteMany({
    userRef: ObjectId(req.user._id),
    polemoveRef: ObjectId(req.body.polemoveId),
  })

  await History.deleteMany({
    userRef: ObjectId(req.user._id),
    polemoveRef: ObjectId(req.body.polemoveId),
  })

  const polemove = await Polemove.findById(ObjectId(req.body.polemoveId))

  return res.status(200).json({
    message: 'Move removed from user',
    polemove: polemove,
  })
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
      note: foundMove.notes[foundMove.notes.length - 1],
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

  const polemove = user.polemoves.find(
    (el) => el.refId.toString() === polemoveId.toString()
  )

  const notes = polemove.notes
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
  })
}

exports.getHistory = async (req, res, next) => {
  try {
    const history = await History.find({ userRef: ObjectId(req.user._id) })
      .sort({ createdAt: -1 })
      .limit(5)

    const getPolemove = async (item) => {
      const polemove = await Polemove.findById(item.polemoveRef)
      if (polemove) {
        return {
          ...item.toObject(),
          name: polemove.name,
        }
      }
    }

    const getData = async () => {
      return Promise.all(
        history.map((item) => {
          return getPolemove(item)
        })
      )
    }

    const modifiedHistory = await getData()

    return res.status(200).json({
      message: 'History retrieved',
      history: modifiedHistory,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
