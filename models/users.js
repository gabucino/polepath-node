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
        mastered: {
          type: Boolean,
          default: false,
        },
        userNotes: [
          { text: String, timestamp: { type: Date, default: Date.now() } },
        ],
        userPhotos: [
          {
            filename: String,
            date: { type: Date, default: Date.now() },
          },
        ],
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
