const router = require('express').Router()
const passport = require('passport')

const faqController = require('../controllers/faq')

router.get('/:faqType', faqController.getFaq)

router.put(
  '/addfaq',
  passport.authenticate('jwt', {
    session: false,
  }),
  faqController.addFaq
)

module.exports = router
