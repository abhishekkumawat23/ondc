var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

async function signupRequestHandler(req, res, next) {
  console.log("I am in signup request handler");
  const {email, password, name} = req.body;
  if (!email || !password) {
    return res.status(400).json({message: "Email and password are required."});
  }

  const userExists = await User.findOne({email});
  if (userExists) {
    return res.status(409).json({message: "Email already exists."});
  }

  const encryptedPassword = await bcrypt.hash(password, 10);
  const user = new User({email, password: encryptedPassword, name});
  await user.save();

  const token = jwt.sign({userId: user._id}, "bla");
  res.send({token})
}

router.post('/', signupRequestHandler);

module.exports = router;
