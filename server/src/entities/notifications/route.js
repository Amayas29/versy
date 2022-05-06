const express = require("express");
const router = express.Router();
const notificationModel = require("../notifications/NotificationModel");
const auth = require("../../middleware/auth");

router.post("/search", auth, async (req, res) => {
  let result = await notificationModel.search(req.body.notification);

  if (!result) {
    res.status(404).send({
      message: "Notification not found",
    });

    return;
  }

  res.status(200).send({
    message: "Notification found",
    id: result._id,
  });
});

router.post("/:id", auth, async (req, res) => {
  const { id } = req.params;

  req.body.notification.user_id = id;
  req.body.notification.sender_id = req.id;
  req.body.notification.created_at = new Date();

  let notif = await notificationModel.notificationTemplate(
    req.body.notification
  );

  await notificationModel.insert(notif);

  res.status(201).send({
    message: "Notification created",
  });
});

router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;

  await notificationModel.delete(id);

  res.status(200).send({
    message: "Notification deleted",
  });
});

router.get("/", auth, async (req, res) => {
  const notifications = await notificationModel.getAll(req.id);

  res.status(200).send({
    message: "Notifications fetched successfully",
    notifications: notifications,
  });
});

module.exports = router;
