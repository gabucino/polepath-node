const router = require('express').Router()
const { body } = require('express-validator')

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
          email: value
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

router.post('/polemoves/addmovetouser', usersController.addMoveToUser)




router.get(
  '/secret',
  passport.authenticate('jwt', {
    session: false,
  }),
  usersController.secret
)

module.exports = router
