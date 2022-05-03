const signUpErrors = require("../../utils/signUpErrors");
const loginErrors = require("../../utils/loginErrors");
const createToken = require("../token/token");

class UserModel {
  constructor(dt) {
    this.dt = dt;
  }

  // Login function 
  login(req, res) {
    const { email, passsword } = req.body;
    // Verify if the user exists
    try{
      this.dt.findOne({ email: email}, (err, user) => {
        // Verify if the user exists
      try{
        if(!user){
          throw new Error("email");
        }
      }catch(err){
        const errors = loginErrors(err);
        console.log(errors);
        return res.status(400).send({errors});
      }

      // Verify if the password is correct
      try{
        if(user && user["password"] !== req.body["password"]){
          throw new Error("password");
        }
      }catch(err){
        const errors = loginErrors(err);
        console.log(errors);
        return res.status(400).send({errors});
      }

      // Connect the user

      const token = createToken(user._id);
      console.log(token);
      res.status(200).send({
        user: user,
        token: token,
        });
      });
    }catch(err){
      const errors = loginErrors(err);
      console.log(errors);
      return res.status(400).send({errors});
    }
  }

}

exports.default = UserModel;
