const express = require("express");

function init() {
  const router = express.Router();
  router.use(express.json());

  router.use((req, _, next) => {
    console.log(`API: method ${req.method}, path ${req.url}`);
    console.log(`API: body ${JSON.stringify(req.body)}`);
    console.log("\n");
    next();
  });

  return router;
}

exports.default = init;
