const router = require('express').Router()
const passport = require('passport')
const { upload } = require('../config/multer')

const polemovesController = require('../controllers/polemoves')

router.put(
  '/create',
  passport.authenticate('jwt', {
    session: false,
  }),
  upload.single('image'),
  polemovesController.create
)

router.get(
  '/polemoves',
  passport.authenticate('jwt', {
    session: false,
  }),
  polemovesController.viewAll
)

module.exports = router
