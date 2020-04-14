const Polemove = require('../models/polemoves')

exports.create = async (req, res) => {
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
    console.error(err)
  }
}

exports.view = async (req, res) => {
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
