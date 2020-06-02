const router = require('express').Router()
const passport = require('passport')


const mediaController = require('../controllers/media')

router.delete(
  '/delete/:id',
  passport.authenticate('jwt', {
    session: false,
  }),
  mediaController.delete
)

module.exports = router
