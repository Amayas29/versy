const Datastore = require("nedb");
const userModel = require("../users/UserModel");

class MessageModel {
  constructor() {
    this.dt = new Datastore({
      filename: "./database/messages.db",
      autoload: true,
    });
  }

  messageTemplate(msg, withId = false) {
    const messageTemplate = {
      content: msg.content || "",
      image: msg.image || "",
      user: msg.user || "",
      publishDate: msg.publishDate || "",
      likes: msg.likes || [],
      isComment: msg.isComment || false,
      comments: msg.comments || [],
    };

    if (withId) messageTemplate._id = msg._id || "";
    return messageTemplate;
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      this.dt.findOne({ _id: id }, (err, msg) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(msg);
      });
    });
  }

  getByUserId(id) {
    return new Promise((resolve, reject) => {
      this.dt
        .find({ user: id, isComment: false })
        .sort({ publishDate: -1 })
        .exec((err, msgs) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(msgs);
        });
    });
  }

  getAll(comments = false) {
    return new Promise((resolve, reject) => {
      const option = comments ? {} : { isComment: false };

      this.dt
        .find(option)
        .sort({ publishDate: -1 })
        .exec((err, msgs) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(msgs);
        });
    });
  }

  getFeed(id) {
    return new Promise((resolve, reject) => {
      userModel.getById(id).then((user) => {
        this.dt
          .find({ user: { $in: [id, ...user.following] }, isComment: false })
          .sort({ publishDate: -1 })
          .exec((err, msgs) => {
            if (err) {
              reject(err);
              return;
            }

            resolve(msgs);
          });
      });
    });
  }

  getComments(id) {
    return new Promise((resolve, reject) => {
      this.dt.findOne(
        { _id: id },
        {
          comments: 1,
        },
        (err, res) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res.comments);
        }
      );
    });
  }

  getLikes(id) {
    return new Promise((resolve, reject) => {
      this.dt.findOne(
        { _id: id },
        {
          likes: 1,
        },
        (err, res) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res.likes);
        }
      );
    });
  }

  search(query) {
    return new Promise((resolve, reject) => {
      this.dt.find(
        {
          content: new RegExp(query, "i"),
          isComment: false,
        },
        (err, msgs) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(msgs);
        }
      );
    });
  }

  insert(msg) {
    return new Promise((resolve, reject) => {
      this.dt.insert(msg, (err, newMsg) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(newMsg);
      });
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      this.getById(id).then((msg) => {
        if (!msg) {
          resolve(true);
          return;
        }

        this.dt.remove({ _id: id }, (err) => {
          if (err) {
            reject(err);
            return;
          }
        });

        // remove all comments
        this.dt.remove(
          { _id: { $in: [...msg.comments] } },
          { multi: true },
          (err) => {
            if (err) {
              reject(err);
              return;
            }
          }
        );

        // remove the messages from all comments
        this.dt.update(
          {},
          { $pull: { comments: id } },
          { multi: true },
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

  removeUserComments(id) {
    return new Promise((resolve, reject) => {
      this.dt.remove({ user: id, isComment: true }, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(true);
      });
    });
  }

  unlikeUserMessages(id) {
    return new Promise((resolve, reject) => {
      this.dt.update({ $pull: { likes: id } }, { multi: true }, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(true);
      });
    });
  }

  update(msg) {
    return new Promise((resolve, reject) => {
      this.dt.update({ _id: msg._id }, msg, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(true);
      });
    });
  }

  comment(msgId, msg) {
    return new Promise((resolve, reject) => {
      this.insert(msg).then((newMsg) => {
        this.dt.update(
          { _id: msgId },
          { $push: { comments: newMsg._id } },
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

  like(msgId, userId) {
    return new Promise((resolve, reject) => {
      this.dt.update(
        { _id: msgId },
        { $addToSet: { likes: userId } },
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

  unlike(msgId, userId) {
    return new Promise((resolve, reject) => {
      this.dt.update({ _id: msgId }, { $pull: { likes: userId } }, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(true);
      });
    });
  }

  countMessages(userId) {
    return new Promise((resolve, reject) => {
      this.dt.count({ user: userId, isComment: false }, (err, count) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(count);
      });
    });
  }

  countComments(userId) {
    return new Promise((resolve, reject) => {
      this.dt.count({ user: userId, isComment: true }, (err, count) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(count);
      });
    });
  }
}

module.exports = new MessageModel();
