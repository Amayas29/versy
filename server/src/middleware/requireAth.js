const jwt = require('jsonwebtoken');
const { default: UserModel } = require("../entities/users/UserModel");
const TOKEN_SECRET = "mucha gracia aspission esta para bosotroch siuuuuuuuuuuullllllllllll!"; 

requireAth = (req, res, next, db) =>{
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, TOKEN_SECRET, async (err, decodedToken) => {
            if(err){
                console.log(err);
            }else{
                console.log(decodedToken.id);
            }
        })
    }else{
        console.log("No token");
    }
}

module.exports = requireAth;