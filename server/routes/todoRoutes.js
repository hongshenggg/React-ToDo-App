const express = require('express');
const router = express.Router();
const {
  createTodo, 
  readTodos, 
  updateTodo, 
  deleteTodo
} = require('../controllers/todoControllers');
const protect = require('../middleware/authMiddleware');

router.route('/').get(protect, readTodos).post(protect, createTodo);
router.route('/:id').put(protect, updateTodo).delete(protect, deleteTodo);

module.exports = router;