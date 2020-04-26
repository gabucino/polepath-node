const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    googleId: String,
    facebookId: String,
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: 'user',
    },
    photoURL: {
      type: String,
    },
    polemoves: [
      {
        move: {
          type: Schema.Types.ObjectId,
          ref: 'Polemove',
        },
        userMoveData: {
          mastered: {
            type: Boolean,
            default: false,
          },
          userNotes: [{ text: String }],
        },
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
