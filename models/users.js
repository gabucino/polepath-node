const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    stageName: {
      type: String,
      required: true,
      unique: true,
    },
    googleId: String,
    facebookId: String,
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: 'user',
    },
    profilePic: {
      type: String,
    },
    polemoves: [{ type: Schema.Types.ObjectId, ref: 'MoveProgress' }],
    activity: [
      {
        event: { type: String, required: true },
        progressRef: { type: Schema.Types.ObjectId },
        createdAt: { type: Date, default: Date.now() },
      },
    ],
    trainingPlan: [{ type: Schema.Types.ObjectId, ref: 'Polemove' }],
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
