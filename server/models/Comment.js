const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User' //bring info from user using objectId
    },
    writer: {
        type: String
    },
    placeId: {
        type: Schema.Types.ObjectId,
        ref: 'Place'
    },
    content: {
       type: String 
    }
},{timestamps: true})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = {Comment};