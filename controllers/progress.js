const ObjectId = require('mongodb').ObjectID

const Progress = require('../models/progress')
const User = require('../models/users')

exports.startProgress = async (req, res, next) => {
  try {
    console.log('PROGRESSCONTROLLER - START PROGRESS')
    const user = await User.findById(ObjectId(req.user._id))
    const newProgress = new Progress({
      userRef: ObjectId(req.user._id),
      moveRef: ObjectId(req.body.polemoveId),
      mastered: req.body.mastered,
    })

    const createdProgress = await newProgress.save()

    user.polemoves.push(createdProgress._id)
    user.activity.push({
      event: req.body.mastered ? 'mastered' : 'started',
      progressRef: createdProgress._id,
    })

    await user.save()

    return res.status(200).json({
      message: 'Move started',
      progress: {
        mastered: createdProgress.mastered,
        photos: [],
        notes: [],
        progressId: createdProgress._id,
      },
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
  }
}

exports.updateProgress = async (req, res, next) => {
  try {
    console.log('UPDATEPROGRESS FIRED')
    //Need progressId, mastered
    await Progress.findOneAndUpdate(
      { _id: ObjectId(req.body.progressId) },
      { mastered: req.body.mastered }
    )

    //handling activity log
    if (req.body.mastered) {
      const user = await User.findById(req.user._id)
      user.activity.push({
        event: 'mastered',
        progressRef: req.body.progressId,
      })
      await user.save()
    } else {
      await User.findOneAndUpdate(
        {
          _id: ObjectId(req.user._id),
          'activity.progressRef': ObjectId(req.body.progressId),
          'activity.event': 'mastered',
        },
        { $set: { 'activity.$.event': 'started' } }
      )
    }

    return res.status(200).json({
      message: 'Move progress updated',
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
  }
}

exports.resetProgress = async (req, res, next) => {
  await Progress.deleteOne({ _id: req.body.progressId })

  await User.findOneAndUpdate(
    { _id: req.user._id },
    { $pull: { polemoves: req.body.progressId } }
  )

  return res.status(200).json({
    message: 'Move removed from user',
  })
}
