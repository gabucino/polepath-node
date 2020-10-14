const ObjectId = require('mongodb').ObjectID

const Progress = require('../models/progress')
const User = require('../models/users')
const Media = require('../models/media')

const bunny = require('../util/bunny')

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
      progressId: createdProgress._id,
      polemoveId: createdProgress.moveRef,
    })

    await user.save()
    return res.status(201).json({
      message: 'Move started',
      progressId: createdProgress._id,
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
    const progress = await Progress.findOneAndUpdate(
      { _id: ObjectId(req.body.progressId) },
      { mastered: req.body.mastered }
    )

    //handling activity log
    if (req.body.mastered) {
      const user = await User.findById(req.user._id)
      user.activity.push({
        event: 'mastered',
        progressId: req.body.progressId,
        polemoveId: progress.moveRef,
      })
      await user.save()
    } else {
      await User.findOneAndUpdate(
        {
          _id: ObjectId(req.user._id),
          'activity.progressId': ObjectId(req.body.progressId),
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
  try {
    console.log('resetprogress fired')
    console.log(req.params.progressId)

    //db delete
    const deletedMove = await Progress.findOneAndDelete({
      _id: req.params.progressId,
    })
    console.log(deletedMove)

    //bunny delete
    if (deletedMove.media.length) {
      const options = {
        userId: req.user._id,
        polemoveId: deletedMove.moveRef,
      }

      bunny.deleteFolder(options)

      await Media.deleteMany({ progressRef: req.params.progressId })
    }
    //delete from User
    await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $pull: {
          polemoves: ObjectId(req.params.progressId),
          activity: {
            progressId: ObjectId(req.params.progressId),
          },
        },
      }
    )

    return res.status(200).json({
      message: 'Move removed from user',
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

//Handling notes

exports.addNote = async (req, res, next) => {
  console.log('adding note...')
  console.log('body', req.body)
  try {
    //inc progressId, text
    const updatedProgress = await Progress.findOneAndUpdate(
      { _id: req.body.progressId },
      {
        $push: {
          notes: {
            text: req.body.text,
          },
        },
      },
      { new: true }
    )

    return res.status(200).json({
      message: 'Note added',
      newNoteId: updatedProgress.notes[updatedProgress.notes.length - 1]._id,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.deleteNote = async (req, res, next) => {
  console.log('deleting note')
  await Progress.findOneAndUpdate(
    { _id: req.params.progressId },
    {
      $pull: {
        notes: {
          _id: req.params.noteId,
        },
      },
    },
    { new: true }
  )

  return res.status(200).json({
    message: `${req.params.noteId} note has been deleted`,
  })
}

//Photo upload

//5ef31b9c56400e0bbdddc28e
//
//{
//    "polemoveId" : "5ef31b9c56400e0bbdddc28e",
//   "mastered" : "false"
//}
