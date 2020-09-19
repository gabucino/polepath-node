
const router = require('express').Router()
const { body } = require('express-validator')

const User = require('../models/users')
const authController = require('../controllers/auth')

const passport = require('passport')


router.put(
    '/',
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
      body('stageName')
        .not()
        .isEmpty()
        .withMessage("Don't forget to enter your stage name!")
        .isLength({ min: 3 }).withMessage("Your stage name must be at least 3 characters long.")
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
      body('password', 'Password must be at least 5 characters long')
        .not()
        .isEmpty()
        .isLength({ min: 5 }),
      // body('confirmPassword').custom(
      //   (value, { req }) => value === req.body.password
      // ),
    ],
    authController.createUser
  )
  
  router.post(
    '/login',
    authController.checkForErrors,
    passport.authenticate('local', { session: false }),
    authController.login
  )
  
  router.get(
    '/autologin',
    passport.authenticate('jwt', { session: false }),
    authController.login
  )
  
  router.get('/logout')
  
  //OAuth Routes
  
  router.post(
    '/google',
    passport.authenticate('googleToken', { session: false }),
    authController.login
  )
  
  router.post(
    '/facebook',
    passport.authenticate('facebookToken', { session: false }),
    authController.login
  )

  module.exports = router
