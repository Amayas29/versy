const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const messageModal = require("./MessageModal");
const userModel = require("../users/UserModel");
const notificationsModel = require("../notifications/NotificationModel");

router.post("/", auth, async (req, res) => {
  const message = messageModal.messageTemplate(req.body.message);

  await messageModal.insert(message);

  res.status(201).send({
    message: "Message created",
  });
});

router.delete("/:id", auth, async (req, res) => {
  const deleted = await messageModal.remove(req.params.id);

  if (!deleted) {
    res.status(404).send({
      message: "Message not found",
    });
  }

  // Remove all notifications related to this message
  await notificationsModel.removeNotificationsMessage(req.params.id);

  res.status(200).send({
    message: "Message deleted",
  });
});

router.get("/", async (_req, res) => {
  const messages = await messageModal.getAll();

  res.status(200).send({
    message: "Messages successfully retrieved",
    messages: messages,
  });
});

router.get("/user/:id", async (req, res) => {
  const messages = await messageModal.getByUserId(req.params.id);

  res.status(200).send({
    message: "Messages successfully retrieved",
    messages: messages,
  });
});

router.get("/feed", auth, async (req, res) => {
  const messages = await messageModal.getFeed(req.id);

  res.status(200).send({
    message: "Messages successfully retrieved",
    messages: messages,
  });
});

router.put("/comment/:id", auth, async (req, res) => {
  const commented = await messageModal.comment(req.params.id, req.body.comment);

  if (!commented) {
    res.status(404).send({
      message: "Message not found",
    });

    return;
  }

  res.status(200).send({
    message: "Message commented",
  });
});

router.put("/like/:id", auth, async (req, res) => {
  const liked = await messageModal.like(req.params.id, req.id);

  if (!liked) {
    res.status(404).send({
      message: "Message not found",
    });

    return;
  }

  res.status(200).send({
    message: "Message liked",
  });
});

router.put("/unlike/:id", auth, async (req, res) => {
  const unliked = await messageModal.unlike(req.params.id, req.id);

  if (!unliked) {
    res.status(404).send({
      message: "Message not found",
    });

    return;
  }

  res.status(200).send({
    message: "Message unliked",
  });
});

router.get("/comments/:id", async (req, res) => {
  const ids = await messageModal.getComments(req.params.id);
  let comments = [];

  for (let id of ids) comments.push(await messageModal.getById(id));

  res.status(200).send({
    message: "Comments successfully retrieved",
    comments: comments,
  });
});

router.get("/likes/:id", async (req, res) => {
  const ids = await messageModal.getLikes(req.params.id);
  let likes = [];

  for (let id of ids) likes.push(await userModel.getById(id));

  res.status(200).send({
    message: "Likes successfully retrieved",
    likes: likes,
  });
});

router.get("/search/:query", async (req, res) => {
  const messages = await messageModal.search(req.params.query);

  res.status(200).send({
    message: "Messages successfully retrieved",
    messages: messages,
  });
});

router.get("/:id", async (req, res) => {
  const message = await messageModal.getById(req.params.id);

  if (!message) {
    res.status(404).send({
      message: "Message not found",
    });

    return;
  }

  res.status(200).send({
    message: "Message successfully retrieved",
    msg: message,
  });
});

module.exports = router;
