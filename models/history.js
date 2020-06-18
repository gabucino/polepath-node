const mongoose = require('mongoose')

const Schema = mongoose.Schema

const historySchema = new Schema(
  {
    type: {
      type: String, 
      required: true,
    },
    // privacy: { type: String, required: true }, 
    userRef: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    itemRef: {
      type: Schema.Types.ObjectId,
    },
    polemoveRef: {
      type: Schema.Types.ObjectId,
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('History', historySchema)
