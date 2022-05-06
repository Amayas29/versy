const { SECRET_KEY } = require("../../../config/const");
const jwt = require("jsonwebtoken");
const userModel = require("../users/UserModel");

class TokenModel {
  constructor() {
    this.maxAge = 1000 * 60 * 60 * 24 * 7;
  }

  // Token creation
  create(id) {
    return jwt.sign({ id }, SECRET_KEY, {
      expiresIn: this.maxAge,
    });
  }

  getByToken(token) {
    return new Promise((resolve, reject) => {
      const data = jwt.verify(token, SECRET_KEY);

      userModel
        .getById(data.id)
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = new TokenModel();
