const jwt = require('jsonwebtoken');
const UserModel = require('./entities/users/UserModel');
const TOKEN_SECRET = "mucha gracia aspission esta para bosotroch siuuuuuuuuuuullllllllllll!"; 

checkUser = (req, res, next, db) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, TOKEN_SECRET, async (err, decodedToken) => {
            if(err){
                res.locals.user = null;
                res.clearCookie('jwt');
                next();
            }else{
                const user = await db.findById(decodedToken);
                res.locals.user = user;
                next();
            }
        })
    }else{
        res.locals.user = null;
        next();
    }
}


export default checkUser;