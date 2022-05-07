const express = require("express");
const router = express.Router();
const userModel = require("./UserModel");
const tokenModel = require("../token/TokenModel");
const messageModel = require("../messages/MessageModal");
const auth = require("../../middleware/auth");
const { hash } = require("../../utils/hash");
const fs = require("fs");
const getNow = require("../../utils/date");

const nothing =
  "data:image/png;base64," +
  fs.readFileSync("./database/nothing.png", "base64");

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Verify if the user exists
  const user = await userModel.getByEmail(email);
  console.log(user);
  if (!user) {
    res.status(401).send({
      field: "email",
      message: "Email does not correspond to any user",
    });

    return;
  }

  // Verify if the password is correct
  const passwordIsValid = await userModel.checkPassword(
    password,
    user.password
  );

  if (!passwordIsValid) {
    res.status(401).send({
      field: "password",
      message: "Incorrect password",
    });

    return;
  }

  // Connect the user
  const token = await tokenModel.create(user._id);
  res
    .cookie("access_token", token, {
      maxAge: tokenModel.maxAge,
    })
    .status(200)
    .send({
      message: "Successfully connected",
      token: token,
    });
});

// registration
router.post("/register", async (req, res) => {
  let user = userModel.userTemplate(req.body.user);
  user.password = await hash(user.password);
  user.joinedDate = getNow();
  user.name = user.username;
  user.avatar = nothing;

  // Verify if the user exists
  const userExists = await userModel.getByEmail(user.email);

  if (userExists) {
    res.status(400).send({
      field: "email",
      message: "Email already used",
    });

    return;
  }

  // Verify if the username exists
  const usernameExists = await userModel.getByUsername(user.username);

  if (usernameExists) {
    res.status(400).send({
      field: "username",
      message: "Username already used",
    });

    return;
  }

  // Create the user
  user = await userModel.insert(user);

  // Connect the user
  const token = await tokenModel.create(user._id);
  res
    .cookie("access_token", token, {
      maxAge: tokenModel.maxAge,
    })
    .status(200)
    .send({
      message: "Successful registration",
      token: token,
    });
});

// logout
router.get("/logout", auth, async (_req, res) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out" });
});

// Get all users
router.get("/", async (_req, res) => {
  const users = await userModel.getAll();

  res.status(200).send({
    message: "Successfully fetched users",
    users: users,
  });
});

// Update user informations
router.put("/", auth, async (req, res) => {
  const oldUser = await userModel.getById(req.body.user._id);

  if (!oldUser) {
    res.status(404).send({
      field: "name",
      message: "User not found",
    });

    return;
  }

  const password = req.body.password;
  const newPassword = req.body.newPassword;

  if (password) {
    // Verify if the password is correct
    const passwordIsValid = await userModel.checkPassword(
      password,
      req.body.user.password
    );

    if (!passwordIsValid) {
      res.status(401).send({
        field: "password",
        message: "Incorrect password",
      });

      return;
    }

    // Update the password
    req.body.user.password = await hash(newPassword);
  }

  // Check if email is already used if it is different from the current one
  const email = req.body.user.email;
  if (email !== oldUser.email) {
    const userExists = await userModel.getByEmail(email);

    if (userExists) {
      res.status(400).send({
        field: "email",
        message: "Email already used",
      });

      return;
    }
  }

  const user = userModel.userTemplate(req.body.user, true);

  // Update the user
  const userUpdated = await userModel.update(user);

  if (!userUpdated) {
    res.status(404).send({
      field: "name",
      message: "User not found",
    });

    return;
  }

  const userUp = await userModel.getById(user._id);

  res.status(200).send({
    message: "Successfully updated user",
    user: userUp,
  });
});

// Delete user
router.delete("/", auth, async (req, res) => {
  const user = await userModel.getById(req.id);

  if (!user) {
    res.status(404).send({
      message: "User not found",
    });

    return;
  }

  const followers = user.followers;
  const following = user.following;

  const userRemoved = await userModel.remove(req.id);

  if (!userRemoved) {
    res.status(404).send({
      message: "User not found",
    });

    return;
  }

  // Unfollow all the following
  for (const id of following) await userModel.unfollow(user._id, id);

  // Remove the user from all the followers
  for (const id of followers) await userModel.unfollow(id, user._id);

  // Get all user messages
  const messages = await messageModel.getByUser(user._id);

  // Remove all the messages
  for (const message of messages) await messageModel.remove(message._id);

  // Remove all user comments
  await model.removeUserComments(user._id);

  // Unlike all user messages liked
  await model.unlikeUserMessages(user._id);

  res.clearCookie("access_token");
  res.status(200).send({
    message: "Successfully deleted user",
  });
});

// follow user
router.patch("/follow/:id", auth, async (req, res) => {
  const userToFollow = req.params.id;
  let sender = req.id;

  const follow = await userModel.follow(sender, userToFollow);

  if (!follow) {
    res.status(404).send({
      message: "User not found",
    });

    return;
  }

  sender = await userModel.getById(sender);
  const user = await userModel.getById(userToFollow);

  res.status(200).send({
    message: "Successfully followed user",
    sender: sender,
    user: user,
  });
});

// unfollow user
router.patch("/unfollow/:id", auth, async (req, res) => {
  const userToUnfollow = req.params.id;
  let sender = req.id;

  const unfollow = await userModel.unfollow(sender, userToUnfollow);

  if (!unfollow) {
    res.status(404).send({
      message: "User not found",
    });

    return;
  }

  sender = await userModel.getById(sender);
  const user = await userModel.getById(userToUnfollow);

  res.status(200).send({
    message: "Successfully unfollowed user",
    sender: sender,
    user: user,
  });
});

router.get("/stats", auth, async (req, res) => {
  const messagesCount = await messageModel.countMessages(req.id);
  const commentsCount = await messageModel.countComments(req.id);

  const allMessages = await messageModel.getAll(true);
  const messagesLiked = allMessages.filter((message) =>
    message.likes.includes(req.id)
  );

  const numberLikes = messagesLiked.length;

  res.status(200).send({
    message: "Successfully fetched stats",
    stats: {
      "number of messages you have published": messagesCount,
      "number of comments you have posted": commentsCount,
      "number of messages/comments you have liked": numberLikes,
    },
  });
});

router.get("/search/:query", async (req, res) => {
  const query = req.params.query;
  const users = await userModel.search(query);

  res.status(200).send({
    message: "Successfully fetched users",
    users: users,
  });
});

router.get("/suggest", auth, async (req, res) => {
  const users = await userModel.suggest(req.id);

  res.status(200).send({
    message: "Successfully fetched users",
    users: users,
  });
});

router.get("/follows/:id", async (req, res) => {
  const user = await userModel.getById(req.params.id);

  if (!user) {
    res.status(404).send({
      message: "User not found",
    });

    return;
  }

  let following = [];
  let followers = [];

  for (let id of user.following) following.push(await userModel.getById(id));

  for (let id of user.followers) followers.push(await userModel.getById(id));

  res.status(200).send({
    message: "Successfully fetched follows",
    following: following,
    followers: followers,
  });
});

// Get user informations
router.get("/:id", async (req, res) => {
  const user = await userModel.getById(req.params.id);

  if (!user) {
    res.status(404).send({
      message: "User not found",
    });

    return;
  }

  res.status(200).send({
    message: "Successfully fetched user",
    user: user,
  });
});

module.exports = router;
