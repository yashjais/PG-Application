const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tenantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pan: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    aadhaar: {
        type: String,
        required: true,
        minlength: 12,
        maxlength: 12
    },
    building: {
        type: Schema.Types.ObjectId,
        required: true
    },
    room: {
        type: Schema.Types.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    rating: {
        type: String
    }
})

const Tenant = mongoose.model('Tenant', tenantSchema)

module.exports = Tenant