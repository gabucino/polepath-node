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
  '/polemoves/addmovetouser',
  passport.authenticate('jwt', {
    session: false,
  }),
  usersController.moveProgressChange
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

// router.get(
//   '/polemoves/getprogressphotos',
//   passport.authenticate('jwt', {
//     session: false,
//   }),
//   usersController.getProgressPhotos
// )

module.exports = router
