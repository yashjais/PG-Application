const mongoose = require('mongoose')
const Schema = mongoose.Schema

const buildingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    amenities: {
        type: [{'_id': Schema.Types.ObjectId}],
        ref: "Amenities"
    },
    landmark: {
        type: String,
        required: true
    },
    typeOf: {
        type: String,
        required: true,
        enum: ['gents', 'ladies', 'co-ed']
    },
    price: {
        type: Number,
        min: 1000,
        max: 10000
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Building = mongoose.model('Building', buildingSchema)

module.exports = Building