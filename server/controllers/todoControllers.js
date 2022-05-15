const Todo = require('../models/todoModel');
const User = require('../models/userModel');

async function createTodo(req, res) {
  if (!req.body.title) {
    res.status(400);
    throw new Error('Please input a title for the todo');
  }
  const todo = await Todo.create({
    user: req.user.id,
    title: req.body.title,
    description: req.body.description
  });

  res.status(201).json(todo)
}

async function readTodos(req, res) {
  const todos = await Todo.find({user: req.user.id});
  res.status(200).json(todos);
}

async function updateTodo(req,res) {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }
  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  // Make sure the logged in user matches the todo user
  if (todo.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,
    req.body, {new: true});

  res.status(200).json(updatedTodo);
}

async function deleteTodo(req,res) {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }
  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  // Make sure the logged in user matches the todo user
  if (todo.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  await todo.remove();
  res.status(200).json({id: req.params.id});
}

module.exports = {createTodo, readTodos,updateTodo, deleteTodo}