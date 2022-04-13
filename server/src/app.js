const path = require("path");
const api = require("./api.js");
const { default: router } = require("./route.js");

const baseDir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${baseDir}`);

const express = require("express");
const app = express();

app.use("/api", api.default());
router(app);

app.on("close", () => {
  console.log("Closing server...");
});

exports.default = app;
