const signUpErrors = require("../../utils/signUpErrors");
const loginErrors = require("../../utils/loginErrors");
const createToken = require("../token/token");

class UserModel {
  constructor(dt) {
    this.dt = dt;
  }

  // Login function

  async login(req, res) {
    const { email, password } = req.body;
    // Verify if the user exists
    try {
      await this.dt.findOne({ email: email }, (err, user) => {
        // Verify if the user exists
        try {
          if (!user) {
            throw new Error("email");
          }
        } catch (err) {
          const errors = loginErrors(err);
          console.log(errors);
          return res.status(400).send({ errors });
        }

        // Verify if the password is correct
        try {
          if (user && user.password !== req.body.password) {
            throw new Error("password");
          }
        } catch (err) {
          const errors = loginErrors(err);
          console.log(errors);
          return res.status(400).send({ errors });
        }

        // Connect the user

        const token = createToken(user._id);
        user.token = token;
        res.status(200).send({
          user: user,
        });
      });
    } catch (err) {
      const errors = loginErrors(err);
      console.log(errors);
      return res.status(400).send({ errors });
    }
  }

  // Sign up function

  async signUp(req, res) {
    const { username, birthdate, email, password, passwordConfirmation } =
      req.body;

    // Verify if the email exists
    let result1 = null;
    let result2 = null;
    let cpt = 0;
    await this.dt.find({ email: email }, (err, user) => {
      result1 = user;
      cpt++;
    });

    // Verify if the username exists

    await this.dt.find({ username: username }, (err, user) => {
      result2 = user;
      cpt++;
    });

    while (cpt < 2) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    console.log(result2);
    console.log(result1);
    try {
      if (result1.length > 0 && result2.length > 0) {
        throw new Error("email and username");
      } else if (result1.length > 0) {
        throw new Error("email");
      } else if (result2.length > 0) {
        throw new Error("username");
      }
    } catch (err) {
      const errors = signUpErrors(err);
      console.log(errors);
      return res.status(400).send({ errors });
    }

    // Create the user
    console.log(" data received");
    this.dt.insert(req.body, (err, user) => {
      if (!err) {
        console.log("user created");
        res.status(200).send(user);
      } else {
        console.log(err);
        res.status(400).send(err);
      }
    });
  }

  // Get all users
  async getAllusers(req, res) {
    await this.dt.find({}, { password: 0 }, (err, users) => {
      console.log(users);
      res.status(200).send(users);
    });
  }

  // Get user informations
  async getUser(req, res) {
    //checkUser

    //checkUser
    await this.dt.find({ _id: req.params.id }, { password: 0 }, (err, user) => {
      if (!err) {
        res.send(user);
      } else console.log("User not found: " + err);
    });
  }

  // update user informations
  async updateUser(req, res) {
    try {
      await dt.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true, upsert: true, setDefaultOnInsert: true },
        (err, doc) => {
          if (!err) return res.send(doc);
          else return res.status(500).send({ message: err });
        }
      );
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  }

  // Delete user
  async deleteUser(req, res) {
    try {
      await dt.remove({ _id: req.params.id }).exec();
      res.status(200).json({
        message: "User deleted",
      });
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  }

  // follow user
  async followUser(req, res) {
    try {
      // add to the followers list

      await dt.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { following: req.body.idToFollow } },
        { new: true, upsert: true },
        (err, doc) => {
          if (!err) resizeTo.status(201).json(doc);
          else res.status(500).json({ err });
        }
      );
      // add to the following list
      await dt.findByIdAndUpdate(
        req.body.idToFollow,
        { $addToSet: { followers: req.params.id } },
        { new: true, upsert: true },
        (err, doc) => {
          if (!err) resizeTo.status(201).json(doc);
          else res.status(500).json({ err });
        }
      );
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  }

  // unfollow user
  async unfollowUser(req, res) {
    try {
      // remove from the followers list

      await dt.findByIdAndUpdate(
        req.params.id,
        { $pull: { following: req.body.idToUnfollow } },
        { new: true, upsert: true },
        (err, doc) => {
          if (!err) resizeTo.status(201).json(doc);
          else res.status(500).json({ err });
        }
      );
      // remove from the following list
      await dt.findByIdAndUpdate(
        req.body.idToUnfollow,
        { $pull: { followers: req.params.id } },
        { new: true, upsert: true },
        (err, doc) => {
          if (!err) resizeTo.status(201).json(doc);
          else res.status(500).json({ err });
        }
      );
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  }
}

exports.default = UserModel;
