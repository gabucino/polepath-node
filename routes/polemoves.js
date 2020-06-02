const router = require('express').Router()
const passport = require('passport')

const polemovesController = require('../controllers/polemoves')

router.put('/create', polemovesController.create)

router.get(
  '/polemoves',
  passport.authenticate('jwt', {
    session: false,
  }),
  polemovesController.viewAll
)

router.get(
  '/polemoves/:polemoveId',
  passport.authenticate('jwt', {
    session: false,
  }),
  polemovesController.view
)

module.exports = router
