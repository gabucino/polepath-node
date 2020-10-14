const router = require('express').Router()
const { upload } = require('../config/multer')

const usersController = require('../controllers/users')

const passport = require('passport')

router.post(
  '/changestagename',
  passport.authenticate('jwt', {
    session: false,
  }),
  usersController.changeStageName
)

router.post(
  '/changeavatar',
  passport.authenticate('jwt', {
    session: false,
  }),
  upload.single('image'),
  usersController.changeAvatar
)

router.get(
  '/history',
  passport.authenticate('jwt', { session: false }),
  usersController.getHistory
)

router.post(
  '/addtotrainingplan',
  passport.authenticate('jwt', { session: false }),
  usersController.addToTrainingPlan
)

router.post(
  '/removefromtrainingplan',
  passport.authenticate('jwt', { session: false }),
  usersController.removeFromTrainingPlan
)

module.exports = router
