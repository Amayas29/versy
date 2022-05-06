const usersRoute = require("./entities/users/route.js");
const messagesRoute = require("./entities/messages/route.js");
const tokenRoute = require("./entities/token/route.js");
const notificationsRoute = require("./entities/notifications/route.js");

function router(app) {
  app.use("/api/token", tokenRoute);
  app.use("/api/users", usersRoute);
  app.use("/api/messages", messagesRoute);
  app.use("/api/notifications", notificationsRoute);
}

module.exports = router;
