const express = require("express");
const router = express.Router();
const { default: UserModel } = require("./UserModel.js");

const Datastore = require("nedb");
const db = new Datastore({
  filename: "./database/users.db",
  autoload: true,
});
const userModel = new UserModel(db);

exports.default = router;
