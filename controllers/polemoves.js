const Polemove = require('../models/polemoves')
const ObjectId = require('mongoose').Types.ObjectId
const User = require('../models/users')
const Media = require('../models/media')

const bunnies = require('../util/bunny')
const moment = require('moment')

exports.create = async (req, res, next) => {
  try {
    const name = req.body.name
    const otherNames = req.body.otherNames
    const level = req.body.level
    const photoURL = req.body.photoURL
    const description = req.body.description

    const newMove = new Polemove({
      name: name,
      otherNames: otherNames,
      level: level,
      photoURL: photoURL,
      description: description,
    })

    const createdMove = await newMove.save()

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
    const userId= req.user._id
    const user = await User.findById(userId)
    const userPolemoveData = user.polemoves


    res
      .status(200)
      .json({ message: 'Moves fetched succesfully', polemoves: polemoves })
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

    const photos =await  Media.find({polemoveRef: ObjectId(polemoveId)})

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
      poleMoveData: polemove,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
