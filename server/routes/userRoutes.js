const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const {
  registerUser, 
  loginUser, 
} = require('../controllers/userController');

router.post('/', asyncHandler(registerUser));
router.post('/login', asyncHandler(loginUser));

module.exports = router;