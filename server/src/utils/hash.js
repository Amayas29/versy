const bcrypt = require("bcrypt");

function hash(password) {
  return bcrypt.hash(password, 10);
}

function compare(password, hashpassword) {
  return bcrypt.compare(password, hashpassword);
}

module.exports = { hash, compare };
