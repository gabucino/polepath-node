const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mediaSchema = new Schema(
  {
    category: {
      type: String, //photo, video, choreo, tutorial??
      required: true,
    },
    privacy: { type: String, required: true }, //public, friends, onlyme
    description: { type: String },
    date: { type: Date, default: Date.now(), required: true },
    userRef: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    moveRef: {
      type: Schema.Types.ObjectId,
      ref: 'Polemove',
      required: true,
    },
    extension: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Media', mediaSchema)
