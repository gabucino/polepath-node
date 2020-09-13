const MoveProgress = require('../models/moveProgress')

const ObjectId = require('mongodb').ObjectID
const User = require('../models/users')

const helpers = require('../util/helpers')

exports.startProgress = async (req, res, next) => {
  try {
    console.log('PROGRESSCONTROLLER - START PROGRESS')
    const user = await User.findById(ObjectId(req.user._id))
    const newMoveProgress = new MoveProgress({
      userRef: ObjectId(req.user._id),
      moveRef: ObjectId(req.body.polemoveId),
      mastered: req.body.mastered,
    })

    const updatedProgress = await newMoveProgress.save()


    user.polemoves.push(updatedProgress._id)
    await user.save()

    const historyType = req.body.mastered ? 'mastered' : 'started'

    helpers.createHistory(
      historyType,
      ObjectId(req.user._id),
      ObjectId(req.body.polemoveId)
    )

    // Promise.all([updatedUser, updatedProgress])
    //   .then((values) => {
    //    return Promise.all(values.map((r) =>console.log(r)))
    //   })
    //   .catch((err) => {
    //     const error = new Error('Something went wrong :(')
    //     throw error
    //   })

    return res.status(200).json({
      progress: {
        mastered: updatedProgress.mastered,
        photos: [],
        notes: [],
        progressId: updatedProgress._id,
      },
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
  }
}
