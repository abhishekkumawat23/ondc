var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

async function loginRequestHandler(req, res, next) {
  console.log("I am in login request handler");
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if (!user) {
    return res.status(401).json({message: "Invalid email or password."});
  }

  const encryptedPassword = user.password;
  const passwordMatch = await bcrypt.compare(password, encryptedPassword);
  if (!passwordMatch) {
    return res.status(401).json({message: "Invalid email or password."});
  }

  const token = jwt.sign({userId: user._id}, "bla");
  res.send({token})
}

router.post('/', loginRequestHandler);

module.exports = router;
