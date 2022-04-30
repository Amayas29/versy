class UserModel {
  constructor(user) {
    this.username = user.username;
    this.birthday = user.birthday;
    this.email = user.email;
    this.password = user.password;
    this.passwordconfirmation = user.passwordconfirmation;
    followers = [];
    following = [];
  }
}

exports.default = UserModel;
