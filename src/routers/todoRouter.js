const express = require('express');
const router = express.Router();
const todoController = require('../controller/todocontroller');

router.get('/todos', todoController.getTodos);
router.post('/todos', todoController.addTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);
router.put('/todos/:id/completed', todoController.toggleComplete);

module.exports = router;
