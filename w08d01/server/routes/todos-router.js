const express = require('express');
const router = express.Router();

// in-memory object
const todos = {
  abc: {
    id: 'abc',
    task: 'study',
    completed: false
  },
  def: {
    id: 'def',
    task: 'planks',
    completed: true
  }
};

// Create - POST /todos/
router.post('/', (req, res) => {
  const task = req.body.task;

  const id = Math.random().toString(36).substring(2, 5);

  const newTodo = {
    id,
    task,
    completed: false
  };

  todos[id] = newTodo;
  console.log(todos);

  res.status(201).json(newTodo);
});

// Read - GET /todos/
router.get('/', (req, res) => {
  const todoArr = Object.values(todos);
  res.json(todoArr);
});

// Update - PATCH /todos/:id
router.patch('/:id', (req, res) => {
  const { newTask, completed } = req.body;

  const todoId = req.params.id;
  
  if (newTask) {
    todos[todoId].task = newTask;
  }

  if (completed !== undefined) {
    todos[todoId].completed = completed;
  }

  console.log(todos);

  res.status(200).send({ success: true });
});

// Delete - DELETE /todos/:id
router.delete('/:id', (req, res) => {
  const todoId = req.params.id;

  delete todos[todoId];

  console.log(todos);

  res.status(200).json({ success: true });
});

module.exports = router;
