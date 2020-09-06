const User = require('../models/users')
const helpers = require('../util/helpers')

exports.addMoveToUser = async (userId, polemoveId, mastered) => {
  try {
    const user = await User.findById(userId)

    const newMove = {
      refId: polemoveId,
      mastered: mastered,
    }

    user.polemoves.push(newMove)
    await user.save()

    return true
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
  }
}

exports.updateProgress = async (userId, polemoveId, mastered) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId, 'polemoves.refId': polemoveId },
      {
        $set: {
          polemoves: {
            refId: polemoveId,
            mastered: mastered,
          },
        },
      },
      { new: true }
    )

    const historyType = mastered ? 'mastered' : 'started'

    helpers.createHistory(
      historyType,
      ObjectId(req.user._id),
      ObjectId(polemoveId)
    )
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
  }
}
