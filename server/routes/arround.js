const express = require('express')
const router = express.Router();
const {Arround} = require('../models/Arround')

router.post('/getArround', (req,res)=>{
    console.log(req.body)
    Arround.find({placeId: req.body.placeId})
        .exec((err, results)=> {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true, results})
        })
})


module.exports = router;