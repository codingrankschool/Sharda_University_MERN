const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todo.controller');

const {addTodo, getAllTodos, getTodoById, deleteTodoById, updateTodoById} = todoController;


//To add a new todo
todoRouter.post('/', addTodo);

//To get all the todos
todoRouter.get('/', getAllTodos);

//To get a todo by id
todoRouter.get('/:id', getTodoById);

//To delete a todo by id
todoRouter.delete('/:id', deleteTodoById);

//To update a todo by id
todoRouter.put('/:id', updateTodoById);

module.exports = todoRouter;