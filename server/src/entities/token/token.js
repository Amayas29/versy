const jwt = require("jsonwebtoken");
const TOKEN_SECRET = "mucha gracia aspission esta para bosotroch siuuuuuuuuuuullllllllllll!"; 
const maxAge = 1000 * 60 * 60 * 24 * 7;

// Token creation

const createToken = (id) => {
    return jwt.sign({id}, TOKEN_SECRET, {
      expiresIn: maxAge,
      
    })
  }

module.exports = createToken;