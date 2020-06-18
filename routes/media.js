const router = require('express').Router()
const passport = require('passport')

const { upload } = require('../config/multer')
const mediaController = require('../controllers/media')

router.delete(
  '/delete/:id',
  passport.authenticate('jwt', {
    session: false,
  }),
  mediaController.delete
)

router.post(
  '/addprogressphoto',
  passport.authenticate('jwt', {
    session: false,
  }),
  upload.single('image'),
  mediaController.addProgressPhoto
)

module.exports = router
