const router = require('express').Router()
const passport = require('passport')


const polemovesController = require('../controllers/polemoves')

router.put('/create', polemovesController.create)

router.get('/polemoves', polemovesController.viewAll)

router.get(
  '/polemoves/:polemoveId',
  passport.authenticate('jwt', {
    session: false,
  }),
  polemovesController.view
)

module.exports = router
