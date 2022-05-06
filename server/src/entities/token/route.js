const express = require("express");
const router = express.Router();
const tokenModel = require("./TokenModel");

router.get("/:token", async (req, res) => {
  const token = req.params.token;

  tokenModel
    .getByToken(token)
    .then((user) => {
      if (!user) {
        res.status(401).send({
          message: "Invalid token",
        });

        return;
      }

      res.status(200).send({
        message: "Successfully fetched",
        user: user,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal server error",
        error: err,
      });
    });
});

module.exports = router;
