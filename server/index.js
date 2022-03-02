const express = require('express')
const app = express()
const port = 4000
const {User} = require("./models/User");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const {auth} = require('./middleware/auth');


//analyze bring url & json type info
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');
const { mongoURl } = require('./config/dev');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true //에러 줄이기
}).then(() => console.log('MongoDB Connected...') ) //연결된거 확인
  .catch(err => console.log(err))

//routing
app.use('/api/favorite', require('./routes/favorite'))
app.use('/api/place', require('./routes/place'))
app.use('/api/recommend', require('./routes/recommend'))
app.use('/api/arround', require('./routes/arround'))
app.use('/api/comment', require('./routes/comment'))


//register route
app.post('/api/users/register', (req,res) => {
  //bring info for sign up from client and put then in db
    const user = new User(req.body) //bring using body parser
    user.save((err, userInfo)=>{         //save at user model
      if(err) return res.json({success: false, err}) //report err with json format
      return res.status(200).json({   //200=success, status code like 404
        success: true   //if success, this msg will show up
      })
    })
})

//login route
app.post('/api/users/login', (req,res) => {
  //find requested email in db
  User.findOne({email: req.body.email}, (err, user)=>{
    if (!user){
        return res.json({
          loginSuccess: false,
          message: "제공된 이메일에 해당하는 유저가 없습니다."
        })
    }
    //if user exist
    //check password of the email
    user.comparePassword(req.body.password, (err,isMatch) => {
      if(!isMatch)
          return res.json({loginSuccess: false, message: "잘못된 비밀번호입니다."})
      
      //generate token if it is right password
      user.genToken((err, user)=>{
        if (err) return res.status(400).send(err);
        //save toekn to cookie, you can save it to local storage or session
        res.cookie("x_auth", user.token)
        .status(200)
        .json({loginSuccess: true, userId: user._id})
      })
    })
  }) 
})

//authentication route
app.get('/api/users/auth', auth, (req,res)=>{
    //pass middleware = authentication true
    res.status(200).json({
      _id: req.user._id,
      isAdmin: req.user.role === 0? false : true, //role !0 = admin
      isAuth: true,
      email: req.user.email,
      userId : req.user.userId,
      role: req.user.role,
      image: req.user.image
    })
})

//logout route
app.get('/api/users/logout', auth,(req,res)=>{
  User.findOneAndUpdate({_id: req.user._id}, 
    {token: ""}, (err,user) => {
      if (err) return res.json({success: false, err});
      return res.status(200).send({success: true})
    })
})



app.listen(port, () => console.log(`Exmaple app listening on port ${port}!`))