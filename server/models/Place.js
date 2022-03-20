const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = mongoose.Schema({
    name: {
        type: String
    },
    address:{
        type: String
    },
    parking: {
        type: String   //0: not exist 1: not good 2: good
    },
    toilet: {
        type: String    //0: not exist /1: not good /2: good
    },
    holiday: {
        type: String
    },
    fee: {
        type: String
    },
    facility: {
        type: String
    },
    equipment: {        //0:not service /else: exist
        type: String
    },
    curator: {          //0:not service /else: exist
        type: String
    },
    description: {
        type: String
    },
    geometry: {
        type: {type: String, 'default': 'Point'},
        coordinates: [{type: 'Number'}]
    }
},{timestamps: true})

placeSchema.index({geometry:'2dsphere'})

const Place = mongoose.model('Place', placeSchema)

module.exports = {Place} 