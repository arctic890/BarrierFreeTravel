const express = require('express')
const router = express.Router();
const {Arround} = require('../models/Arround')

router.post('/getArround', (req,res)=>{
    Arround.find({placeId: req.body.placeId})
        .exec((err, results)=> {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true, results})
        })
})

router.post('/addArround', (req,res)=>{
    const arround = new Arround(req.body)
    arround.save((err, doc)=>{
        if(err) return res.status(400).send(err)
        return res.status(200).json({success:true})
    })
})


module.exports = router;