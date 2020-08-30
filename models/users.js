const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    stageName: {
      type: String,
      required: true,
      unique: true
    },
    googleId: String,
    facebookId: String,
    email: {
      type: String,
      unique: true
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
    polemoves: [
      {
        refId: {
          type: Schema.Types.ObjectId,
          ref: 'Polemove',
        },
        mastered: {
          type: Boolean,
          default: false,
        },
        notes: [
          { text: String, timestamp: { type: Date, default: Date.now() } },
        ],
        photos: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
