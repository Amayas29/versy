const express = require("express");
const router = express.Router();
const { default: UserModel } = require("./UserModel.js");

// const Datastore = require("nedb");
const userModel = new UserModel();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userModel.get(id);

  if (user) res.status(200).send(user);
  else
    res.status(404).send({
      status: 404,
      message: "User not found",
    });
});

exports.default = router;
