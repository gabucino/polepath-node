const Polemove = require('../models/polemoves')
const ObjectId = require('mongoose').Types.ObjectId
const User = require('../models/users')
const Media = require('../models/media')

const bunnies = require('../util/bunny')
const moment = require('moment')

exports.create = async (req, res, next) => {
  try {
    const name = req.body.name
    let otherNames = req.body.otherNames
    const level = req.body.level
    const mainPhoto = req.file
    const description = req.body.description
    let extension = null


    if (mainPhoto) {
      extension = mainPhoto.mimetype.split('/').pop()
    }

    if (otherNames !== 'undefined') {
      if (otherNames.includes(',')) {
        otherNames = otherNames.split(',')
      } else {
        otherNames[0] = otherNames
      }
    } else {
      otherNames = []
    }

    const newMove = new Polemove({
      name: name,
      otherNames: otherNames,
      level: level,
      description: description === 'undefined' ? '' : description,
      extension: extension,
    })

    const createdMove = await newMove.save()

    //Bunny photo upload
    if (extension) {
      const bunnyData = {
        fsFileName: mainPhoto.filename,
        bunnyFileName: `${createdMove._id}.${extension}`,
        path: `mainphotos`,
      }

      await bunnies.upload(bunnyData)
    }

    res
      .status(201)
      .json({ message: 'Polemove created', polemoveId: createdMove._id })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.viewAll = async (req, res, next) => {
  try {
    //get all moves
    const polemoves = await Polemove.find()

    if (!polemoves) {
      res.status(204).json({ message: 'No moves found :(' })
    }
    //get userspecific data
    const userId = req.user._id
    const user = await User.findById(userId)
    const userPolemoveData = user.polemoves

    const newPolemoves = polemoves.map((el) => {
      const currentMove = user.polemoves.find(
        (genEl) => genEl.refId.toString() === el._id.toString()
      )
      if (currentMove) {
        return {
          userData: { ...currentMove.toObject() },
          generalData: {
            ...el.toObject(),
            photoURL: el.extension
              ? `https://polepath.b-cdn.net/mainphotos/${el._id}.${el.extension}`
              : null,
          },
        }
      } else {
        return {
          generalData: {
            ...el.toObject(),
            photoURL: el.extension
              ? `https://polepath.b-cdn.net/mainphotos/${el._id}.${el.extension}`
              : null,
          },
        }
      }
    })

    res
      .status(200)
      .json({ message: 'Moves fetched succesfully', polemoves: newPolemoves })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.view = async (req, res, next) => {
  try {
    //TODO: make sure to get user id too
    const polemoveId = req.params.polemoveId
    const isValid = ObjectId.isValid(polemoveId)
    if (!isValid) {
      const error = new Error('Move id invalid')
      error.statusCode = 411
      throw error
    }

    //I need to return two things: user related data, and general polemovedata
    const user = await User.findById(req.user._id)

    const polemove = await Polemove.findById(polemoveId)
    if (!polemove) {
      const error = new Error('Move not found :(')
      error.statusCode = 422
      throw error
    }

    const foundMove = user.polemoves.find(
      (move) => move.refId.toString() === polemoveId
    )

    if (polemove && !foundMove) {
      return res.status(200).json({
        message: 'Move fetched, no user data found.',
        polemove: polemove,
      })
    }

    const photos = await Media.find({
      polemoveRef: ObjectId(polemoveId),
      userRef: ObjectId(req.user._id),
    })

    // const bunnyData = {
    //   path: `users/${req.user._id}/${polemoveId}/progressphotos`,
    // }
    let newPhotos
    // bunnies.getAll(bunnyData)
    if (foundMove) {
      if (photos) {
        newPhotos = photos.map((el) => ({
          _id: el._id,
          date: moment(el.date.getTime()).format('D MMMM YYYY'),
          path: `https://polepath.b-cdn.net/users/${req.user._id}/${polemoveId}/${el._id}.${el.extension}`,
        }))
      }
    }

    const polemoveWithUserdata = {
      ...foundMove.toObject(),
      photos: newPhotos,
      ...polemove.toObject(),
    }

    return res.status(200).json({
      message: 'Move with userdata fetched successfully.',
      polemove: polemoveWithUserdata,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
