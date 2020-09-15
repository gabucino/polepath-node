const User = require('../models/users')

exports.create = async (user, event, progressRef) => {
  console.log('creating activity')
  user.activity.push({
    event: event,
    progressRef: progressRef ? progressRef : null,
  })
  
  await user.save()
}
