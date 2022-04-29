const express = require("express");
const router = express.Router();
const { default: UserModel } = require("./UserModel.js");

const Datastore = require("nedb");
const db = new Datastore({
  filename: "./server/src/entities/users/users.db",
  autoload: true,
});
const userModel = new UserModel(db);

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userModel.get(id);
  if (user) res.status(200).send({ user: user });
  else
    res.status(404).send({
      status: 404,
      message: "User not found",
    });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.query;

  const user = await userModel.checkAccount(email, password);
});
router.post("/register", async (req, res) => {
  const { username, birthday, email, password, passwordconfirmation } = req.query;
  const user = await userModel.registerUser({
    username: username,
    birthday: birthday,
    email: email,
    password: password,
    passwordconfirmation: passwordconfirmation,
  });
});

exports.default = router;
