const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recommendSchema = mongoose.Schema({
    placeId: {
        type: Schema.Types.ObjectId,
        ref: 'Place' //bring info from user using objectId
    },
    visual: {
        type: String        //0: not recommend 1: need supporter 2: good
    },
    intellectual: {
        type: String 
    },
    wheelchairM: {
        type: String 
    },
    wheelchairA: {
        type: String 
    },
    physicalW: {
        type: String 
    },
    auditory: {
        type: String 
    },
    senior: {
        type: String 
    },
    infant: {
        type: String 
    }
},{timestamps: true})

const Recommend = mongoose.model('Recommend', recommendSchema)

module.exports = {Recommend} 