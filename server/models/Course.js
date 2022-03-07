const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = mongoose.Schema({
    placeId : {
        type: Schema.Types.ObjectId,
        ref: 'Place'
    },
    course : {
        type: String
    },
    recommend : {
        type: Boolean
    }
})

const Course = mongoose.model('Course', courseSchema)

module.exports = {Course} 