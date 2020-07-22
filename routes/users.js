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
    body('stageName')
      .not()
      .isEmpty()
      .withMessage("Don't forget to enter your stage name!")
      .custom((value) => {
        return User.findOne({
          stageName: value,
        }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              'Sorry, that stagename is already taken. Please, choose another one.'
            )
          }
        })
      }),
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
    body('password', 'Password must be at least 5 characters long')
      .not()
      .isEmpty()
      .isLength({ min: 5 }),
    // body('confirmPassword').custom(
    //   (value, { req }) => value === req.body.password
    // ),
  ],
  usersController.create
)

router.post(
  '/login', usersController.checkForErrors,
    passport.authenticate(
      'local', 
      { session: false }
    ),
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

router.post(
  '/changestagename',
  passport.authenticate('jwt', {
    session: false,
  }),
  usersController.changeStageName
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
