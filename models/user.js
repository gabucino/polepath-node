const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    googleId: String,
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
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
