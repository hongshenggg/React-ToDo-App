const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const {
  createTodo, 
  readTodos, 
  updateTodo, 
  deleteTodo
} = require('../controllers/todoControllers');
const protect = require('../middleware/authMiddleware');

router.route('/').get(asyncHandler(protect), asyncHandler(readTodos)).post(asyncHandler(protect), asyncHandler(createTodo));
router.route('/:id').put(asyncHandler(protect), asyncHandler(updateTodo)).delete(asyncHandler(protect), asyncHandler(deleteTodo));

module.exports = router;