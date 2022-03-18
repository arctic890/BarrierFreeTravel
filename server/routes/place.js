const express = require('express')
const router = express.Router();
const {Place} = require('../models/Place')

router.post('/searchPlace', (req,res)=> {
    Place.find({'name': {$regex : req.body.keyword}})
        .exec((err, result)=> {
            if (err) return res.status(400).send(err)
            return res.status(200).json({success: true, result})
        })
})
router.post('/addPlace', (req,res)=>{
    const place = new Place(req.body)
    place.save((err, doc)=>{
        if(err) return res.status(400).send(err)
        return res.status(200).json({success:true})
    })
})


module.exports = router;