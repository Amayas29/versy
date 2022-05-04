const express = require("express");
const router = express.Router();
const { default: UserModel } = require("./UserModel");
const checkUser = require("../../middleware/checkUser");
// Datatable creation

const Datastore = require("nedb");
const dt = new Datastore({
  filename: "./database/users.db",
  autoload: true,
});

// Create a userModel
const userModel = new UserModel(dt);

// registration

router.post("/register", async (req, res) => {
  userModel.signUp(req, res);
});

// login

router.post("/login", async (req, res) => {
  userModel.login(req, res);
});

// logout

router.get("/logout", async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "logout" });
});

// Get all users

router.get("/", async (req, res) => {
  userModel.getAllusers(req, res);
});

// Get user informations

router.get("/:id", async (req, res) => {
  userModel.getUser(req, res);
});

// Update user informations

router.put("/:id", async (req, res) => {
  userModel.updateUser(req, res);
});

// Delete user

router.delete("/:id", async (req, res) => {
  userModel.deleteUser(req, res);
});

// follow user

router.patch("/follow/:id", async (req, res) => {
  userModel.followUser(req, res);
});

// unfollow user

router.patch("/unfollow/:id", async (req, res) => {
  userModel.unfollowUser(req, res);
});

exports.default = router;
