const express = require('express')
const router = express.Router();
const {Favorite} = require('../models/Favorite')


/////////////////////////////Favorite Page
//get favorite places
router.post('/getFavorite', (req,res)=>{
    Favorite.find({'userFrom': req.body.userFrom})
        .exec((err, favorites)=> {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true, favorites})
        })
})


router.post('/remList', (req,res) => {
    Favorite.findOneAndDelete({placeName: req.body.placeName, userFrom: req.body.userFrom})
        .exec((err, result)=> {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true})
        })
})

module.exports = router;