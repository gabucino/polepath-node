const User = require('../models/users')

exports.create = async (user, event, progressId) => {
  console.log('creating activity')
  user.activity.push({
    event: event,
    progressId: progressId ? progressId : null,
  })
  
  await user.save()
}
