const path = require("path");
const api = require("./api.js");
const { default: router } = require("./route.js");

const baseDir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${baseDir}`);

const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const checkUser = require("./middleware/checkUser.js");



app.use(
  cors()
);
app.use(
  session({
    secret: "technoweb rocks",
  })
);

app.use("/api", api.default());
router(app);

app.use(cookieParser());

app.on("close", () => {
  console.log("Closing server...");
});

// jwt
// app.get('*', checkUser);


exports.default = app;
