const router = require('express').Router()
const { body } = require('express-validator')
const { upload } = require('../config/multer')

const User = require('../models/users')
const usersController = require('../controllers/users')

const passport = require('passport')

//Create user

router.put(
  '/create',
  [
    body('email')
      .normalizeEmail({ gmail_remove_dots: false })
      .isEmail()
      .withMessage('Please enter a valid email')
      .custom((value, { req }) => {
        return User.findOne({
          email: value,
        }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject('Email already exists. Please sign in.')
          }
        })
      }),
  ],
  usersController.create
)

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  usersController.login
)

router.get(
  '/autologin',
  passport.authenticate('jwt', { session: false }),
  usersController.login
)

router.get('/logout')

//OAuth Routes

router.post(
  '/google',
  passport.authenticate('googleToken', { session: false }),
  usersController.login
)

router.post(
  '/facebook',
  passport.authenticate('facebookToken', { session: false }),
  usersController.login
)

//Any protected page example

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

router.post(
  '/polemoves/addphoto',
  passport.authenticate('jwt', {
    session: false,
  }),
  upload.single('image'),
  usersController.addProgressPhoto
)

module.exports = router
