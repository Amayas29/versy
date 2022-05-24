const { compare } = require("../../utils/hash");
const Datastore = require("nedb");

class UserModel {
  constructor() {
    this.dt = new Datastore({
      filename: "./database/users.db",
      autoload: true,
    });
  }

  checkPassword(password, hash) {
    return compare(password, hash);
  }

  userTemplate(user, withId = false) {
    const userTemplate = {
      avatar: user.avatar || "",
      name: user.name || "",
      username: user.username || "",
      email: user.email || "",
      password: user.password || "",
      bio: user.bio || "",
      birthday: user.birthday || "",
      joinedDate: user.joinedDate || "",
      followers: user.followers || [],
      following: user.following || [],
      banWords: user.banWords || [],
    };

    if (withId) userTemplate._id = user._id || "";

    return userTemplate;
  }

  getByEmail(email) {
    return new Promise((resolve, reject) => {
      this.dt.findOne({ email: email }, (err, user) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(user);
      });
    });
  }

  getByUsername(username) {
    return new Promise((resolve, reject) => {
      this.dt.findOne({ username: username }, (err, user) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(user);
      });
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      this.dt.findOne({ _id: id }, (err, user) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(user);
      });
    });
  }

  // Get all users
  getAll() {
    return new Promise((resolve, reject) => {
      this.dt.find({}, (err, users) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(users);
      });
    });
  }

  insert(user) {
    return new Promise((resolve, reject) => {
      this.dt.insert(user, (err, newUser) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(newUser);
      });
    });
  }

  update(user) {
    return new Promise((resolve, reject) => {
      this.dt.update(
        { _id: user._id },
        user,

        (err) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(true);
        }
      );
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      this.dt.remove({ _id: id }, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(true);
      });
    });
  }

  follow(sender, target) {
    return new Promise((resolve, reject) => {
      this.dt.findOne({ _id: target }, (err, user) => {
        if (err) {
          reject(err);
          return;
        }

        if (!user) {
          resolve(false);
          return;
        }

        this.dt.update(
          { _id: sender },
          { $addToSet: { following: target } },
          (err) => {
            if (err) {
              reject(err);
              return;
            }

            this.dt.update(
              { _id: target },
              { $addToSet: { followers: sender } },
              (err) => {
                if (err) {
                  reject(err);
                  return;
                }

                resolve(true);
              }
            );
          }
        );
      });
    });
  }

  unfollow(sender, target) {
    return new Promise((resolve, reject) => {
      this.dt.findOne({ _id: target }, (err, user) => {
        if (err) {
          reject(err);
          return;
        }

        if (!user) {
          resolve(false);
          return;
        }

        this.dt.update(
          { _id: sender },
          { $pull: { following: target } },
          (err) => {
            if (err) {
              reject(err);
              return;
            }
          }
        );

        this.dt.update(
          { _id: target },
          { $pull: { followers: sender } },
          (err) => {
            if (err) {
              reject(err);
              return;
            }

            resolve(true);
          }
        );
      });
    });
  }

  search(query) {
    return new Promise((resolve, reject) => {
      this.dt.find(
        {
          username: new RegExp(query, "i"),
        },
        (err, users) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(users);
        }
      );
    });
  }

  suggest(userId) {
    return new Promise((resolve, reject) => {
      this.getById(userId).then((user) => {
        this.dt.find(
          {
            _id: { $nin: [userId, ...user.following] },
          },
          (err, users) => {
            if (err) {
              reject(err);
              return;
            }

            resolve(users);
          }
        );
      });
    });
  }
}

module.exports = new UserModel();
