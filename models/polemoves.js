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
    photoURL: {
      type: String,
      default:
        'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/pole-dancing-unicorn-cute-funny-pole-dance-gift-thomas-larch.jpg',
    },
    description: {
      type: String,
    },
    usersPhotos: [{ type: String }],
    usersNotes: [{ type: String }],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Polemove', poleMovesSchema)
