const User = require('../models/users')
const ObjectId = require('mongodb').ObjectID

const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

const bunny = require('../util/bunny')

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

exports.removeFromTrainingPlan = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $pull: {
          trainingPlan: ObjectId(req.body.polemoveId)
        },
      },
      { new: true }
    )

    return res.status(200).json({
      message: 'Move removed from training plan',
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}