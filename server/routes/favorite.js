const express = require('express')
const router = express.Router();
const {Favorite} = require('../models/Favorite')


/////////////////////////////Favorite Page
//get favorite places
router.post('/getFavorite', (req,res)=>{
    Favorite.find({'userFrom': req.body.userFrom})
        .populate('placeId')
        .exec((err, favorites)=> {
            if(err) return res.status(400).send(err)
            //console.log(favorites)
            return res.status(200).json({success: true, favorites})
        })
})

router.post('/remList', (req,res) => {
    Favorite.findOneAndDelete({placeId: req.body.placeId, userFrom: req.body.userFrom})
        .exec((err, result)=> {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true})
        })
})


////////////////Info Page
router.post('/favorited', (req,res)=>{
    //check if user add the movie in favorite list
    Favorite.find({"placeId": req.body.placeId, "userFrom": req.body.userFrom})
        .exec((err, info) => {
            if(err) return res.status(400).send(err)
            //return result to front
            let result = false;
            //if query result exists -> the movie is in favorite list
            //console.log('favorited:',info)
            if (info.length != 0) {
                result = true;
            }
            res.status(200).json({success: true, favorited: result})
        })
})

router.post('/removeFav', (req,res)=>{
    Favorite.findOneAndDelete({placeId: req.body.placeId, userFrom: req.body.userFrom})
        .exec((err,doc) => {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true, doc})
        })
})

router.post('/addFav', (req,res)=>{
    const favorite = new Favorite(req.body)
    favorite.save((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({success: true})
    })  //save at favorite doc 
})

module.exports = router;