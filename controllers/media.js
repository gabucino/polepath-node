const ObjectId = require('mongoose').Types.ObjectId
const Polemove = require('../models/polemoves')
const User = require('../models/users')
const Media = require('../models/media')

const bunnies = require('../util/bunny')
const moment = require('moment')

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

    await bunnies.delete(bunnyData)

    await Media.findByIdAndDelete(photoId)

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
      photos: newPhotos,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
