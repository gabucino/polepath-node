const router = require('express').Router()
const passport = require('passport')

const progressController = require('../controllers/progress')

//progress change
router.put(
  '/start',
  passport.authenticate('jwt', { session: false }),
  progressController.startProgress
)

router.post(
  '/update',
  passport.authenticate('jwt', {
    session: false,
  }),
  progressController.updateProgress
)

router.delete(
  '/:progressId/reset',
  passport.authenticate('jwt', {
    session: false,
  }),
  progressController.resetProgress
)

//notes
router.post(
  '/addnote',
  passport.authenticate('jwt', { session: false }),
  progressController.addNote
)

router.delete(
  '/:progressId/notes/:noteId',
  passport.authenticate('jwt', { session: false }),
  progressController.deleteNote
)

module.exports = router
