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



router.post(
  '/polemoves/resetprogress',
  passport.authenticate('jwt', {
    session: false,
  }),
  usersController.resetProgress
)

router.post(
  '/polemoves/addnotes',
  passport.authenticate('jwt', {
    session: false,
  }),
  usersController.addNote
)

router.post(
  '/polemoves/deletenote',
  passport.authenticate('jwt', {
    session: false,
  }),
  usersController.deleteNote
)

router.get(
  '/history',
  passport.authenticate('jwt', { session: false }),
  usersController.getHistory
)

module.exports = router
