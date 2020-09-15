const router = require('express').Router()
const passport = require('passport')

const progressController = require('../controllers/progress')

router.post(
  '/start',
  passport.authenticate('jwt', { session: false }),
  progressController.startProgress
)


router.post(
  '/update',
  passport.authenticate('jwt', {
    session: false,
  }),
  progressController.updateProgress
)

router.post(
  '/reset',
  passport.authenticate('jwt', {
    session: false,
  }),
  progressController.resetProgress
)

module.exports = router
