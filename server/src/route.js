const { default: usersRoute } = require("./entities/users/route.js");
const { default: messagesRoute } = require("./entities/messages/route.js");
const { default: tokenRoute } = require("./entities/token/route.js");

function router(app) {
  app.use("/api/token", tokenRoute);
  app.use("/api/users", usersRoute);
  app.use("/api/messages", messagesRoute);
}

exports.default = router;
