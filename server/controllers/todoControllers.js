function createTodo(req, res) {
  res.status(200).json({message: 'created todo'})
}

function readTodos(req, res) {
  res.status(200).json({message: 'read todos'})
}

function updateTodo(req,res) {
  res.status(200).json({message: 'updated todo'})
}

function deleteTodo(req,res) {
  res.status(200).json({message: 'delete todo'})
}

module.exports = {createTodo, readTodos,updateTodo, deleteTodo}