const ObjectId = require('mongoose').Types.ObjectId
const User = require('../models/users')
const Media = require('../models/media')
const History = require('../models/history')

const bunny = require('../util/bunny')
const helpers = require('../util/helpers')

const moment = require('moment')

//Add progressphoto

exports.addProgressPhoto = async (req, res, next) => {
  try {
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

    const newPhoto = {
      _id: createdMedia._id,
      date: moment(createdMedia.date.getTime()).format('D MMMM YYYY'),
      path:`https://polepath.b-cdn.net/users/${req.user._id}/${polemoveId}/${createdMedia._id}.${createdMedia.extension}`
    }

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

    await bunny.upload(bunnyData)
    console.log('Bunny upload done');

    //Public DB uload
    // if (privacy === 'public') {
    //   const publicPolemove = await Polemove.findById(polemoveId)
    // }
    //Response

    const userPhotos = await Media.find({
      polemoveRef: polemoveId,
      userRef: req.user._id,
    })


    helpers.createHistory('photo', ObjectId(req.user._id), ObjectId(polemoveId), ObjectId(photo._id))

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
    const photoId = req.params.id
    const userId = req.user._id

    const photo = await Media.findById(photoId)
    const polemoveRef = photo.polemoveRef.toString()

    //check if deleter is the correct user
    if (userId.toString() !== photo.userRef.toString()) {
      const error = new Error(
        "You don't have the permission to perform this action"
      )
      error.statusCode = 401
      throw error
    }

    //Delete from bunny
    const bunnyData = {
      polemoveId: polemoveRef,
      userId: userId,
      filename: `${photoId}.${photo.extension}`,
    }

    await bunny.delete(bunnyData)

    await Media.findByIdAndDelete(photoId)

    await History.deleteOne({
      itemRef: ObjectId(photoId),
    })

    const user = await User.findById(userId)


    const polemoveIndex = user.polemoves.findIndex(
      (el) => el.refId.toString() === polemoveRef
    )

    const newPhotos = user.polemoves[polemoveIndex].photos.filter(
      (el) => el.toString() !== photoId
    )

    user.polemoves[polemoveIndex].photos = newPhotos

    // const updatedUser = await User.findOneAndUpdate({
    //   _id: userId,
    //   'polemoves.refId': polemoveRef,
    // }, {})

    await user.save()

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
