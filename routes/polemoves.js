const router = require('express').Router()

const polemovesController = require('../controllers/polemoves')


router.put('/create', polemovesController.create)

router.get('/polemoves', polemovesController.viewAll)


router.get('/polemoves/:polemoveId', polemovesController.view)

module.exports = router
