const router = require('express').Router()
const passport = require('passport')

const moveProgressController = require('../controllers/moveProgress')

router.post(
  '/startprogress',
  passport.authenticate('jwt', { session: false }),
  moveProgressController.startProgress
)

module.exports = router
