class UserModel {
  constructor(database) {
    this.database = database;
  }

  get(userId) {
    return new Promise((resolve, reject) => {
      this.database.find({ id: userId }, (err, doc) => {
        if (err) reject(err);
        else resolve(doc);
      });
    });
  }

  checkAccount(email, password) {
    return new Promise((resolve, reject) => {
      this.database.find({ email: email, password: password }, (err, doc) => {
        if (err) reject(err);
        else resolve(doc);
      });
    });
  }
}

exports.default = UserModel;
