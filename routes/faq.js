const router = require('express').Router()
const passport = require('passport')

const faqController = require('../controllers/faq')
const checks = require('../util/checks')

router.get('/:faqType', faqController.getFaq)

router.put(
  '/addfaq',

  passport.authenticate('jwt', {
    session: false,
  }),
  checks.adminCheck,
  faqController.addFaq
)

module.exports = router
