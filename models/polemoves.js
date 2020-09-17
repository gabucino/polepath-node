const mongoose = require('mongoose')

const Schema = mongoose.Schema

const poleMovesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    otherNames: [{ type: String }],
    level: { type: String },
    mainPhoto: {
      type: String,
    },
    description: {
      type: String,
    },
    extension: { type: String },
    publicMedia: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Polemove', poleMovesSchema)
