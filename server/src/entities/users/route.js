const express = require("express");
const router = express.Router();
const { default: UserModel } = require("./UserModel.js");
// const signUpErrors = require("./utils/errors");
const signUpErrors = require("../../utils/signUpErrors");
const loginErrors = require("../../utils/loginErrors");
const jwt = require("jsonwebtoken");
const maxAge = 1000 * 60 * 60 * 2;
const TOKEN_SECRET = "mucha gracia aspission esta para bosotroch siuuuuuuuuuuullllllllllll!"; 

// Datatable creation

const Datastore = require("nedb");
const db = new Datastore({
  filename: "./database/users.db",
  autoload: true,
});



// Token creation

const createToken = (id) => {
  return jwt.sign({id}, TOKEN_SECRET, {
    expiresIn: maxAge,
  })
}



// registration

router.post("/register", async (req, res) => {
  const { username,
    birthday,
    email,
    password,
    passwordconfirmation } = req.body;
    try{

      // Verify if the user already exists

      let res =  await db.findOne( {username: username });
      let reason = "username";
      if(! res)
        res = await db.findOne( {email: email })
        reason = "email";
      try{
        if(res && reason === "username"){
          throw new Error("username");
        }
      }catch(err){
        const errors = loginErrors(err);
        console.log(errors);
        return res.status(400).send({errors});
      }

      console.log(res);
      try{
        if(res && reason === "email"){
          throw new Error("email");
        }
      }catch(err){
        const errors = loginErrors(err);
        console.log(errors);
        return res.status(400).send({errors});
      }

      // Add the user to the database

      console.log("data received");
      const user = new UserModel({
        username: username,
        birthday: birthday,
        email: email,
        password: password,
        passwordconfirmation: passwordconfirmation,
      });
      db.insert(user);
      res.status(200).json({user: user._id});
    }catch(err){
      res.status(404).send(err);
    }
})


// login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try{

    db.findOne({ email: email}, (err, user) => {
      
    // Verify if the user exists
    
    try{
      if(!user){
        throw new Error("email");
      }
    } catch(err){
      const errors = loginErrors(err);
      console.log(errors);
      return res.status(400).send({errors});
    }
    try{
      if(user && user.password !== password){
        throw new Error("password");
      }
    } catch(err){
      const errors = loginErrors(err);
      console.log(errors);
      return res.status(400).send({errors});
    }

    // Connect the user

    
    const token = createToken(user._id);
    res.status(200).send({
      user: user,
      token: token,
      });
    });
  }catch(err){
      res.status(404).send(400);
  }
});


// logout

router.get("/logout", async (req, res) => {
  res.clearCookie('jwt');
  res.status(200).json({message: "logout"});
})




// Get all users

router.get("/", async (req, res) => {
  const users =   await db.find().select('-password');
  res.status(200).json(users);
})


// Get user informations

router.get("/:id", async (req, res) => {
  db.findById(req.params.id, (err, docs) => {
    if(!err) res.send(docs);
    else console.log("User not found: " + err);
  }).select('-password');
})


// Update user informations

router.put("/:id", async (req, res) => {
  try{
    await db.findOneAndUpdate({ _id: req.params.id },
       { $set: req.body },
        { new: true, upsert: true, setDefaultOnInsert: true },
        (err, doc) => {
          if(!err) return res.send(doc);
          else return res.status(500).send({ message: err});
        }
       )
  }catch(err){
    return res.status(500).json({
      message: err,
    });
  }
})


// Delete user

router.delete("/:id", async (req, res) => {
  try{
    await db.remove({ _id: req.params.id }).exec();
    res.status(200).json({
      message: "User deleted",
    });
  }catch(err){
    return res.status(500).json({
      message: err,
    });
  }
})  

// follow user

router.patch('/follow/:id',   async (req, res) => {
  try{

    // add to the followers list

    await db.findByIdAndUpdate(
      req.params.id,
       { $addToSet: { following: req.body.idToFollow } },
        { new: true, upsert: true},
        (err, doc) => {
          if(!err) resizeTo.status(201).json(doc);
          else res.status(500).json({err});
        }
       )
    // add to the following list
    await db.findByIdAndUpdate(
      req.body.idToFollow,
       { $addToSet: { followers: req.params.id } },
        { new: true, upsert: true},
        (err, doc) => {
          if(!err) resizeTo.status(201).json(doc);
          else res.status(500).json({err});
        }
       )

  }catch(err){
    return res.status(500).json({
      message: err,
    });
  }
})

    // unfollow user  

router.patch('/unfollow/:id',   async (req, res) => {
  try{

    // remove from the followers list

    await db.findByIdAndUpdate(
      req.params.id,
       { $pull: { following: req.body.idToUnfollow } },
        { new: true, upsert: true},
        (err, doc) => {
          if(!err) resizeTo.status(201).json(doc);
          else res.status(500).json({err});
        }
       )
    // remove from the following list
    await db.findByIdAndUpdate(
      req.body.idToUnfollow,
       { $pull: { followers: req.params.id } },
        { new: true, upsert: true},
        (err, doc) => {
          if(!err) resizeTo.status(201).json(doc);
          else res.status(500).json({err});
        }
       )
    
  }catch(err){
    return res.status(500).json({
      message: err,
    });
  }
})

exports.default = router;
