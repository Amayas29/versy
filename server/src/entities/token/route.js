const express = require("express");
const router = express.Router();

let mapping_tokens = {};

router.get("/token/:token", async (req, res) => {
  const { token } = req.params;

  if (mapping_tokens[token]) {
    res.status(200).send({ user_id: mapping_tokens[token] });
    return;
  }

  res.status(401).json({
    status: 401,
    message: "Unauthorized",
  });
});

exports.default = router;
