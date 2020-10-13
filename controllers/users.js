const User = require('../models/users')
const Polemove = require('../models/polemoves')
const Media = require('../models/media')
const History = require('../models/history')
const Progress = require('../models/progress')

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

exports.getHistory = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.user._id })
      .slice('activity', -5)
      .populate({ path: 'activity.polemoveId', select: 'name' })
      .exec()

    return res.status(200).json({
      activity: user.activity,
      message: 'History retrieved',
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}


exports.addToTrainingPlan = async (req, res, next) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: {
          trainingPlan: req.body.polemoveId
        },
      },
      { new: true }
    )

    return res.status(200).json({
      message: 'Added to training plan',
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}