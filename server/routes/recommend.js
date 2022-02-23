const express = require('express')
const router = express.Router();
const {Recommend} = require('../models/Recommend')

router.post('/getRecommend',(req,res)=>{
    Recommend.find({'placeId': req.body.placeId})
        .exec((err,result)=> {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true, result})
        })
})

module.exports = router;