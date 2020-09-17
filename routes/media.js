const router = require('express').Router()
const passport = require('passport')

const { upload } = require('../config/multer')
const mediaController = require('../controllers/media')

router.post(
  '/addprogressphoto',
  passport.authenticate('jwt', {
    session: false,
  }),
  upload.single('image'),
  mediaController.addProgressPhoto
)

router.delete(
  '/delete/:progressId/:mediaId',
  passport.authenticate('jwt', {
    session: false,
  }),
  mediaController.delete
)

module.exports = router
