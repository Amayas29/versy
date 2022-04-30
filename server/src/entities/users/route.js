const express = require("express");
const router = express.Router();
const { default: UserModel } = require("./UserModel.js");
const jws = require("jsonwebtoken");


// Datatable creation

const Datastore = require("nedb");
const db = new Datastore({
  filename: "./database/users.db",
  autoload: true,
});




// auth

router.post("/register", async (req, res) => {
  const { username,
    birthday,
    email,
    password,
    passwordconfirmation } = req.body;
    try{
      const user = new UserModel({
        username: username,
        birthday: birthday,
        email: email,
        password: password,
        passwordconfirmation: passwordconfirmation,
      });
      res.status(201).json({user: user._id});
    }catch(err){
      res.status(400).send({
        error: err.message,
      });
    }
})


// login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try{
    const user = await db.findOne({email: email});
    if(user){
      const token = createToken(user._id);
    }
  }catch(err){
    res.status(400).send({
      error: err.message,
    });
  }
})


// logout

router.get("/logout", async (req, res) => {
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
