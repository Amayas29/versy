class UserModel {
  constructor(user) {
    this.username = user.username;
    this.birthday = user.birthday;
    this.email = user.email;
    this.password = user.password;
    this.passwordconfirmation = user.passwordconfirmation;
    this.bio = "";
    this.followers = []; 
    this.following = [];
    this.likes = [];
  }
}

exports.default = UserModel;
