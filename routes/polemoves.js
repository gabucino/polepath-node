const router = require('express').Router()

const Polemove = require('../models/polemoves')
const polemovesController = require('../controllers/polemoves')


router.put('/create', polemovesController.create)

router.get('/polemoves', polemovesController.view)

module.exports = router
