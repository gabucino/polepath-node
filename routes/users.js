const router = require('express').Router()

const usersController = require('../controllers/users')

const passport = require('passport')

router.put('/create', usersController.create)

//OAuth Routes
// router.get(
//   '/google',
//   passport.authenticate('google', {
//     scope: ['profile'],
//   })
// )

//calback route for google to redirect to:
router.post(
  '/google',
  passport.authenticate('googleToken', { session: false }),
  usersController.login
)

router.get(
  '/secret',
  passport.authenticate('jwt', {
    session: false,
  }),
  usersController.secret
)

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  usersController.login
)

router.get('/logout')

module.exports = router
