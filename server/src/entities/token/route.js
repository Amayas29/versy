const express = require("express");
const router = express.Router();

let mapping_tokens = { h467vdgchcv356: "2465376FTFdqs3" };

router.get("/token", async (req, res) => {
  const { token } = req.body;
  if (mapping_tokens[token])
    res.status(200).send({ user_id: mapping_tokens[token] });

  res.status(401).json({
    status: 401,
    message: "Unauthorized",
  });
});

exports.default = router;
