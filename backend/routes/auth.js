const router = require("express").Router();
const User = require("../models/User.js");
const CryptoJS=require("crypto-js");

//register;

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password,
        process.env.PASS_SEC).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login" , async(req , res)=>{
   try{
    const user = await User.findOne({username:req.body.username});
    !user && res.status(401).json("Wrong credentials");


    const hashedPassword=CryptoJS.AES.decrypt
    (user.password,
    process.env.PASS_SEC);
     const password=hashedPassword.toString(CryptoJS.enc.Utf8);
     password!==password.body.password && 
     res.status(401).json("Wrong Credentials");

    res.status(200).json(user);

   }catch(error){

   }



})

module.exports = router;
