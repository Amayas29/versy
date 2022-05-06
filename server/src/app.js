const path = require("path");
const api = require("./api.js");
const router = require("./route.js");

const baseDir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${baseDir}`);

const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(
  session({
    secret: "versy to the moon",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use("/api", api.default());
router(app);

app.on("close", () => {
  console.log("Closing server...");
});

exports.default = app;
