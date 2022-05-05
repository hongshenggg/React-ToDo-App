const express = require('express');
const router = express.Router();
const {createTodo, readTodos, updateTodo, deleteTodo} = require('../controllers/todoControllers');

router.route('/').get(readTodos).post(createTodo);
router.route('/:id').put(updateTodo).delete(deleteTodo);

module.exports = router;