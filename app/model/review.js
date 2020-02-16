const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tenant: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review