const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const arroundSchema = mongoose.Schema({
    placeId: {
        type: Schema.Types.ObjectId,
        ref: 'Place' //bring info from user using objectId
    },
    category: {
        type: String
    },
    name: {
        type: String
    },
    dsitance: {
        type: String
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    wheel: {
        type: Boolean,
    },
    toilet: {
        type: Boolean,
    },
    geometry: {
        type: {type: String, 'default': 'Point'},
        coordinates: [{type: 'Number'}]
    }
},{timestamps: true})

const Arround = mongoose.model('Arround', arroundSchema)

module.exports = {Arround} 