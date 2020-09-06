const User = require('../models/users')
const Polemove = require('../models/polemoves')
const Media = require('../models/media')
const History = require('../models/history')

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
    console.log(req.file)
    const profilePic = req.file
    const extension = profilePic.mimetype.split('/').pop()
    console.log('FILENAME: ', profilePic.filename)
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
  console.log('STARTING PROGRESS')
  try {
    const user = await User.findById(req.user._id)

    const newMove = {
      refId: req.body.polemoveId,
      mastered: req.body.mastered,
    }

    user.polemoves.push(newMove)
    const updatedUser = await user.save()

    // const historyType = req.body.mastered ? 'mastered' : 'started'
    // helpers.createHistory(
    //   historyType,
    //   ObjectId(req.user._id),
    //   ObjectId(polemoveId)
    // )

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

  console.log('UPDATEDMOVE', updatedMove)

  return res.status(200).json({
    message: `Mastered is now ${updatedMove.mastered}`,
    updatedMove: updatedMove,
  })
}

exports.resetProgress = async (req, res, next) => {
  console.log('Reaching the reset controller.');
  console.log(`Supposed to update ${req.user._id}: should remove ${req.body.polemoveId}`);
  const updatedUser = await User.findByIdAndUpdate(req.user._id, {
    $pull: {
      polemoves: {
        refId: req.body.polemoveId,
      },
    },
  })
  console.log(req.body.polemoveId === updatedUser._id)

  const mediaFiles = await Media.find({
    userRef: req.user._id,
    polemoveRef: req.body.polemoveId,
  })

  //Removing file from bunny
  mediaFiles.forEach((file) =>
    bunny.delete({
      polemoveId: polemoveId,
      userId: req.user._id,
      filename: `${file._id}.${file.extension}`,
    })
  )
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

exports.moveProgressChange = async (req, res, next) => {
  try {
    const userId = req.user
    const polemoveId = req.body.polemoveId
    const mastered = req.body.mastered

    const historyType = mastered ? 'mastered' : 'started'
    const polemove = await Polemove.find({ _id: polemoveId })

    const user = await User.findById(userId)
    const userCurrentMoves = user.polemoves

    //Index will be -1 if no match found or array length is 0
    const index = userCurrentMoves.findIndex(
      (polemove) => polemove.refId.toString() === polemoveId
    )
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

      //removing mediafiles from bunny

      const mediaFiles = await Media.find({
        userRef: req.user._id,
        polemoveRef: polemoveId,
      })

      mediaFiles.forEach((file) =>
        bunny.delete({
          polemoveId: polemoveId,
          userId: req.user._id,
          filename: `${file._id}.${file.extension}`,
        })
      )

      //removing media&history records
      await Media.deleteMany({
        userRef: ObjectId(req.user._id),
        polemoveRef: ObjectId(polemoveId),
      })
      await History.deleteMany({
        userRef: ObjectId(req.user._id),
        polemoveRef: ObjectId(polemoveId),
      })

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

      helpers.createHistory(
        historyType,
        ObjectId(req.user._id),
        ObjectId(polemoveId)
      )

      if (mastered == false) {
        await History.deleteMany({
          userRef: ObjectId(req.user._id),
          polemoveRef: ObjectId(polemoveId),
          type: 'mastered',
        })
      }

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

    //Creating history record

    helpers.createHistory(
      historyType,
      ObjectId(req.user._id),
      ObjectId(polemoveId)
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
    console.log(modifiedHistory)

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
