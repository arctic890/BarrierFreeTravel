const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recommendSchema = mongoose.Schema({
    placeId: {
        type: Schema.Types.ObjectId,
        ref: 'Place' //bring info from user using objectId
    },
    visual: {
        type: Number         //0: not recommend 1: need supporter 2: good
    },
    intellectual: {
        type: Number
    },
    wheelchairM: {
        type: Number
    },
    wheelchairA: {
        type: Number
    },
    physicalW: {
        type: Number
    },
    auditory: {
        type: Number
    },
    senior: {
        type: Number
    },
    infant: {
        type: Number
    }
},{timestamps: true})

const Recommend = mongoose.model('Recommend', recommendSchema)

module.exports = {Recommend} 