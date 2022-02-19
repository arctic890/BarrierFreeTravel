const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User' //bring info from user using objectId
    },
    placeName: {
        type: String
    },
    recommend: {
        type: Schema.Types.ObjectId,
        ref: 'Recommend'
    },
    placeAddress: {
        type: String,
    },
},{timestamps: true})

const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = {Favorite} 