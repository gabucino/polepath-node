const User = require('../models/users')

exports.create = async (user, event, progressId) => {
  console.log('creating activity')
  user.activity.push({
    event: event,
    progressId: progressId ? progressId : null,
  })
  
  await user.save()
}


exports.checkForErrors = async (req, res, next) => {
  const email = req.body.email

  const user = await User.findOne({ email: email.toLowerCase() })

  if (!user) {
    return res
      .status(400)
      .json({ message: 'No account found with this e-mail address.' })
  }
  next()
}