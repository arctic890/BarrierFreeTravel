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
        type: String    //0: not exist 1: not good 2: good
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
    equipment: {
        type: String
    },
    curator: {
        type: String
    },
    description: {
        type: String
    }
},{timestamps: true})

const Place = mongoose.model('Place', placeSchema)

module.exports = {Place} 