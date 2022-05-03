const signUpErrors = require("../../utils/signUpErrors");
const loginErrors = require("../../utils/loginErrors");
const createToken = require("../token/token");

class UserModel {
  constructor(dt) {
    this.dt = dt;
  }

  // Login function 

  login(req, res) {
    const { email, password } = req.body;
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
        if(user && user.password !== req.body.password){
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

  // Sign up function

  async signUp(req, res) {
    const {username, birthdate, email, password, passwordConfirmation} = req.body;
    
    // Verify if the email exists
    let result1 = null
    let result2 = null
    let cpt = 0;
    await this.dt.find({email: email}, (err, user) => {
        result1 = user;
        cpt++;
      })

      // Verify if the username exists
    
    await this.dt.find({username: username}, (err, user) => {
      result2 = user;
      cpt++;
    });
    
    while(cpt < 2){
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log(result2);
    console.log(result1);
    try{
      if(result1.length > 0 && result2.length > 0){
        throw new Error("email and username");
      }else if(result1.length > 0){
        throw new Error("email");
      }else if(result2.length > 0){
        throw new Error("username");
      }
    }catch(err){
      const errors = signUpErrors(err);
      console.log(errors);
      return res.status(400).send({errors});
    }

    // Create the user
    console.log(" data received");
    this.dt.insert(req.body, (err, user) => {
      if(!err) {
        console.log("user created");
        res.status(200).send(user);
      } else {
        console.log(err);
        res.status(400).send(err);
      }
    })   

  }

}

exports.default = UserModel;
