const ObjectId = require('mongoose').Types.ObjectId
const User = require('../models/users')
const Media = require('../models/media')
const History = require('../models/history')
const Progress = require('../models/progress')

const bunny = require('../util/bunny')

const moment = require('moment')
const { updateProgress } = require('./progress')

//Add progressphoto

exports.addProgressPhoto = async (req, res, next) => {
  try {
    const polemoveId = req.body.polemoveId
    const progressId = req.body.progressId
    const userId = ObjectId(req.user._id)

    const image = req.file

    if (!image) {
      return res.status(422).json({
        message: 'Attached file is not an image',
      })
    }

    //DB photos upload
    const media = new Media({
      category: 'photo',
      privacy: 'private',
      extension: image.mimetype.split('/').pop(),
      date: new Date(),
      userRef: userId,
      moveRef: polemoveId,
    })
    const createdMedia = await media.save()

    //Bunny upload
    const picId = createdMedia._id.toString()
    const bunnyData = {
      fsFileName: image.filename,
      bunnyFileName: `${picId}.${image.mimetype.split('/').pop()}`,
      path: `users/${userId}/${polemoveId}`,
    }
    await bunny.upload(bunnyData)

    //Public DB uload
    // if (privacy === 'public') {
    //   const publicPolemove = await Polemove.findById(polemoveId)
    // }

    await Progress.findOneAndUpdate(progressId, {
      $push: {
        media: createdMedia._id,
      },
    })
    await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: {
          activity: {
            event: 'photo',
            polemoveId: polemoveId,
            itemId: createdMedia._id,
          },
        },
      }
    )

    //Response
    const newPhoto = {
      _id: createdMedia._id,
      date: moment(createdMedia.date.getTime()).format('D MMMM YYYY'),
      path: `https://polepath.b-cdn.net/users/${userId}/${polemoveId}/${createdMedia._id}.${createdMedia.extension}`,
    }

    return res.status(200).json({
      message: 'Photo uploaded',
      newPhoto: newPhoto,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.delete = async (req, res, next) => {
  try {
    console.log('DELETE PHOTO CODE')
    const media = await Media.findOneAndDelete(req.params.mediaId)

    console.log('media', media)
    //Delete ref in Progress
    const updatedProgress = await Progress.findOneAndUpdate(
      {
        _id: req.params.progressId,
      },
      {
        $pull: {
          media: ObjectId(media._id),
        },
      },
      { new: true }
    )

    console.log('UPDATEDPROGRESS:', updatedProgress)
    //Delete from storage
    const options = {
      userId: req.user._id,
      polemoveId: media.moveRef,
      filename: `${media._id}.${media.extension}`
    }

    bunny.delete(options)


    return res.status(200).json({
      message: 'Photo deleted',
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
