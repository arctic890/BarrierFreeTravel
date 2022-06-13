const express = require('express')
const router = express.Router();
const {Course} = require('../models/Course')

router.post('/getCourse', (req,res)=>{
    Course.find({placeId: req.body.placeId})
        .exec((err, results)=> {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true, results})
        })
})

router.post('/addCourse', (req,res)=>{
    const course = new Course(req.body)
    course.save((err, doc)=>{
        if(err) return res.status(400).send(err)
        return res.status(200).json({success:true})
    })
})


module.exports = router;