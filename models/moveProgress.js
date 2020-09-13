const mongoose = require('mongoose')

const Schema = mongoose.Schema

const moveProgressSchema = new Schema(
{
    userRef: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, moveRef: {
        type: Schema.Types.ObjectId,
        ref: 'Polemove',
        required: true
    }, mastered: {
        type: Boolean,
        required: true
    }, notes: [
        {text: String, timestamp: {type: Date, default: Date.now()}}
    ], photos: [{ 
        category: {
            type: String, //photo, video, choreo, tutorial??
            required: true,
          },
          privacy: { type: String, required: true }, //public, friends, onlyme
          description: { type: String },
          date: { type: Date, default: Date.now(), required: true },
          extension: { type: String, required: true },
          timestamp: { type: Date, default: Date.now() },
    }]
    
}, {timestamps: true}

)

module.exports = mongoose.model('MoveProgress', moveProgressSchema)