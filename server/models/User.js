const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //공백 없애기
        unique: 1   //겹침 x
    },
    password: {
        type: String,
        minlength: 5
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },  //유효성 관리
    tokenExp: {
        type: Number
    }  //토큰의 유효기간
})

userSchema.pre('save',function(next){
    var user = this; //this = userSchema
    //rehash only when password is changed 
    if(user.isModified('password')){
        //encode password
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash
                next() //return to save
            });
        });
    } else {
        next()
    }
})

//create method 'comparePassword'
userSchema.methods.comparePassword = function(plainPassword, cb) {
    //compare plain password and encoded password
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if (err) return cb(err)
        cb(null, isMatch)
    })
}

userSchema.methods.genToken = function(cb){
    var user = this;
    //generate token using jsonwebtoken
    var token = jwt.sign(user._id.toHexString(), 'tokentoken')
    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;
    //decode token
    jwt.verify(token,'tokentoken', function(err, decoded) {
        //using user id, find user and compare with db and client token
        user.findOne({"_id": decoded, "token": token}, function(err,user){
            if (err) return cb(err);
            cb(null,user);
        })
    })
}

const User = mongoose.model('User', userSchema)

module.exports = {User} //다른 파일에서도 쓸 수 있게하기