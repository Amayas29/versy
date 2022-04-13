const { default: userRoute } = require("./entities/user/route.js");
const { default: messageRoute } = require("./entities/message/route.js");
const { default: tokenRoute } = require("./entities/token/route.js");

function router(app) {
  app.use("/api/token", tokenRoute);
  app.use("/api/user", userRoute);
  app.use("/api/message", messageRoute);
}

exports.default = router;
