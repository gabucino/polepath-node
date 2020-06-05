const Polemove = require('../models/polemoves')
const ObjectId = require('mongoose').Types.ObjectId
const User = require('../models/users')
const Media = require('../models/media')

const bunnies = require('../util/bunny')
const moment = require('moment')

exports.create = async (req, res, next) => {
  try {
    console.log('FILE:', req.file)
    console.log('BODY:', req.body)
    const name = req.body.name
    let otherNames = req.body.otherNames
    const level = req.body.level
    const mainPhoto = req.file
    const description = req.body.description
    let extension = null

    if (mainPhoto) {
      extension = mainPhoto.mimetype.split('/').pop()
    }

    if (otherNames !== undefined) {
      if (otherNames.includes(',')) {
        otherNames = otherNames.split(',')
      }
    } else {
      otherNames = []
    }

    const newMove = new Polemove({
      name: name,
      otherNames: otherNames,
      level: level,
      description: description,
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
              : 'https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/p960x960/82307430_132194544922526_6226538982365200384_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=-BRwJWxlU1wAX9Pm935&_nc_ht=scontent.fakl2-1.fna&_nc_tp=6&oh=03b06344205f6c8a3236fd0330a838c9&oe=5EFF13FC',
          },
        }
      } else {
        return {
          generalData: {
            ...el.toObject(),
            photoURL: el.extension
              ? `https://polepath.b-cdn.net/mainphotos/${el._id}.${el.extension}`
              : 'https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/p960x960/82307430_132194544922526_6226538982365200384_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=-BRwJWxlU1wAX9Pm935&_nc_ht=scontent.fakl2-1.fna&_nc_tp=6&oh=03b06344205f6c8a3236fd0330a838c9&oe=5EFF13FC',
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
      error.statusCode = 404
      throw error
    }

    //I need to return two things: user related data, and general polemovedata
    const user = await User.findById(req.user._id)

    const foundMove = user.polemoves.find(
      (move) => move.refId.toString() === polemoveId
    )

    const photos = await Media.find({ polemoveRef: ObjectId(polemoveId) })

    console.log(photos)

    // const userWithPolemoveData = await User.findById(req.user._id).populate({
    //   path: 'polemoves.refId',
    // })

    const polemove = await Polemove.findById(polemoveId)
    if (!polemove) {
      const error = new Error('Move not found :(')
      error.statusCode = 422
      throw error
    }

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

    return res.status(200).json({
      userMoveData: foundMove
        ? {
            ...foundMove.toObject(),
            photos: newPhotos,
          }
        : null,
      generalData: polemove,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
