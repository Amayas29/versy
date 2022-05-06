const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../config/const");
const userModel = require("../entities/users/UserModel");

const auth = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return res.sendStatus(403);

  try {
    const data = jwt.verify(token, SECRET_KEY);

    // Verify that the user exists
    const user = await userModel.getById(data.id);
    if (!user) return res.sendStatus(403);

    req.id = data.id;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

module.exports = auth;
