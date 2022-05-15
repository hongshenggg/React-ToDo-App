const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// @desc Register new user
// @route POST /api/users
// @access Public
async function registerUser(req, res) {
  const {name, email, password} = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // Check if user exists
  const userExists = await User.findOne({email});
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  if(user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      message: 'User successfully registered, redirecting back to login page in 3 seconds'
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
}

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
async function loginUser(req, res) {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
}

// Generate JWT
function generateToken(id) {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
}

module.exports = {
  registerUser,
  loginUser,
}