const express = require("express");
const router = express.Router();
const { default: UserModel } = require("./UserModel");

// Datatable creation

const Datastore = require("nedb");
const dt = new Datastore({
  filename: "./database/users.db",
  autoload: true,
});

// Create a userModel
const userModel = new UserModel(dt);


// registration

router.post("/register", async (req, res) => {
  userModel.signUp(req, res);
})


// login

router.post("/login", async (req, res) => {
  userModel.login(req, res); 
});


// logout

router.get("/logout", async (req, res) => {
  res.clearCookie('jwt');
  res.status(200).json({message: "logout"});
})




// Get all users

router.get("/", async (req, res) => {
  const users =   await dt.find().select('-password');
  res.status(200).json(users);
})


// Get user informations

router.get("/:id", async (req, res) => {
  dt.findById(req.params.id, (err, docs) => {
    if(!err) res.send(docs);
    else console.log("User not found: " + err);
  }).select('-password');
})


// Update user informations

router.put("/:id", async (req, res) => {
  try{
    await dt.findOneAndUpdate({ _id: req.params.id },
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
    await dt.remove({ _id: req.params.id }).exec();
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

    await dt.findByIdAndUpdate(
      req.params.id,
       { $addToSet: { following: req.body.idToFollow } },
        { new: true, upsert: true},
        (err, doc) => {
          if(!err) resizeTo.status(201).json(doc);
          else res.status(500).json({err});
        }
       )
    // add to the following list
    await dt.findByIdAndUpdate(
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

    await dt.findByIdAndUpdate(
      req.params.id,
       { $pull: { following: req.body.idToUnfollow } },
        { new: true, upsert: true},
        (err, doc) => {
          if(!err) resizeTo.status(201).json(doc);
          else res.status(500).json({err});
        }
       )
    // remove from the following list
    await dt.findByIdAndUpdate(
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
