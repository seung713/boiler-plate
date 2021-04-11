const { User } = require('../models/User')

let auth = (req, res, next) => {
    //인증 처리

    //클라이언트 쿠키에서 토큰 가져옴
    let token = req.cookies.x_auth

    //토큰으로 유저를 찾음
    User.findByToken(token, (err, user) => {
        console.log(user)
        if(err) throw err
        if(!user) return res.json({isAuth: false, error: true})

        req.token = token
        req.user = user
        next()
    })
}

module.exports = {auth}