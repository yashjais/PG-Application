const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = new Schema({
    building: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    roomNo: {
        type: String,
        required: true
    },
    sharing: {
        type: Number,
        enum: [1,2,3,4,6,8],
        required: true
    },
    price: {
        type: Number,
        min: 1000,
        max: 10000
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room