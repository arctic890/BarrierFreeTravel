const express = require('express')
const router = express.Router();
const {Comment} = require('../models/Comment')
const {User} = require('../models/User')

router.post('/getComment', (req,res)=>{
    Comment.find({placeId: req.body.placeId})
        .exec((err, results)=> {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true, results})
        })
})

router.post("/addComment", (req,res)=> {
    const comment = new Comment(req.body)
    comment.save((err, comment)=> {
        if(err) return res.json({success: false, err})
        Comment.find({'_id': comment._id})
            .populate('userFrom')
            .exec( (err,result)=> {
                if(err) return res.status(500).json({success: false, err})
                res.status(200).json({success:true, result})
            })
    })
})


module.exports = router;