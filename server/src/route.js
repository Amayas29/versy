const usersRoute = require("./entities/users/route.js");
const messagesRoute = require("./entities/messages/route.js");
const tokenRoute = require("./entities/token/route.js");

function router(app) {
  app.use("/api/token", tokenRoute);
  app.use("/api/users", usersRoute);
  app.use("/api/messages", messagesRoute);
}

module.exports = router;
