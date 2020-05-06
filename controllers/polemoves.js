const Polemove = require('../models/polemoves')
const ObjectId = require('mongoose').Types.ObjectId
const User = require('../models/users')

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
    const polemoves = await Polemove.find()

    if (!polemoves) {
      res.status(204).json({ message: 'No moves found :(' })
    }
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
    const userMoves = req.user.polemoves
    
    const foundMove = userMoves.find(
      (move) => move.move.toString() === polemoveId
    )

    const polemove = await Polemove.findById(polemoveId)
    if (!polemove) {
      const error = new Error('Move not found :(')
      error.statusCode = 422
      throw error
    }

    return res.status(200).json({
      userMoveData: foundMove ? foundMove : null,
      poleMoveData: polemove,
    })

  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
