const mongoose = require('mongoose')

const Schema = mongoose.Schema

const amenitySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Amenity = mongoose.model('Amenity', amenitySchema)

module.exports = Amenity