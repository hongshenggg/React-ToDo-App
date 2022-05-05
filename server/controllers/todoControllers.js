const todoModel = require('../models/todoModel');

async function createTodo(req, res) {
  if (!req.body.title) {
    res.status(400);
    throw new Error('Please input a title for the todo');
  }
  const todo = await todoModel.create({
    title: req.body.title,
    description: req.body.description
  });

  res.status(200).json({message: 'created todo'})
}

async function readTodos(req, res) {
  const todos = await todoModel.find(); 
  res.status(200).json(todos);
}

async function updateTodo(req,res) {
  const todo = await todoModel.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }

  const updatedTodo = await todoModel.findByIdAndUpdate(req.params.id,
    req.body, {new: true});

  res.status(200).json(updatedTodo);
}

async function deleteTodo(req,res) {
  const todo = await todoModel.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }

  await todo.remove();
  res.status(200).json({id: req.params.id});
}

module.exports = {createTodo, readTodos,updateTodo, deleteTodo}