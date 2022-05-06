const Datastore = require("nedb");

class NotificationModel {
  constructor() {
    this.dt = new Datastore({
      filename: "./database/notifications.db",
      autoload: true,
    });
  }

  notificationTemplate(notif, withId = false) {
    const notification = {
      message: notif.message || "",
      type: notif.type || "",
      sender_id: notif.sender_id || "",
      user_id: notif.user_id || "",
      created_at: notif.created_at || null,
    };

    if (withId) notification._id = notif._id;

    return notification;
  }

  getAll(userId) {
    return new Promise((resolve, reject) => {
      this.dt.find({ user_id: userId }, (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      });
    });
  }

  insert(notif) {
    return new Promise((resolve, reject) => {
      this.dt.insert(notif, (err, newDoc) => {
        if (err) reject(err);
        resolve(newDoc);
      });
    });
  }

  search(notif) {
    return new Promise((resolve, reject) => {
      this.dt.findOne(
        {
          message: notif.message,
          type: notif.type,
          sender_id: notif.sender_id,
          user_id: notif.user_id,
        },
        (err, doc) => {
          if (err) reject(err);
          resolve(doc);
        }
      );
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.dt.remove({ _id: id }, {}, (err) => {
        if (err) reject(err);
        resolve(true);
      });
    });
  }

  removeNotificationsMessage(messageId) {
    return new Promise((resolve, reject) => {
      this.dt.remove({ message: messageId }, { multi: true }, (err) => {
        if (err) reject(err);
        resolve(true);
      });
    });
  }
}

module.exports = new NotificationModel();
