const mongoose = require('mongoose')

const Schema = mongoose.Schema

const progressSchema = new Schema(
  {
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
    mastered: {
      type: Boolean,
      required: true,
    },
    notes: [{ text: String, timestamp: { type: Date, default: Date.now() } }],
    media: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Progress', progressSchema)
