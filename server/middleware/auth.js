const {User} = require('../models/User');

let auth = (req, res, next) => {
    //인증 처리
    //bring token from client cookie
    let token = req.cookies.x_auth;
    //let token = req.headers.cookies.split('x_auth=')[1]
    //decode token and find user
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if (!user) return res.json({isAuth: false, error: true})

        req.token = token;
        req.user = user;   //index에서 사용할 수 있게 하기위해
        next(); //exit from middleware
    })
    //if user exist auth success
    //if not auth fail
}

module.exports = {auth};