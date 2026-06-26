// const todoDBOperations = require('../repositories/todo.repository');
const Todo = require('../models/todo.model');

const todoController = {
    addTodo: async (req, res) => {

        try{

            const todo = req.body;
            // const savedTodo = todoDBOperations.save(todo);
            let newTodo = new Todo(todo)
            await newTodo.save()
            return res.status(201).json({status: 'success', message: 'Todo added successfully', data: newTodo});

        }
        catch(err){

            console.error("Error occurred while adding todo:", err);
            return res.status(500).json({status: 'error', message: 'Internal Server Error', error: err.message});
        }
  
    },

    getAllTodos: async (req, res) => {
        try{
            // const todos = todoDBOperations.getAll();
            const todos = await Todo.find();
            return res.status(200).json({status: 'success', message: 'Todos retrieved successfully', data: todos});
        }
        catch(err){
            console.error("Error occurred while retrieving todos:", err);
            return res.status(500).json({status: 'error', message: 'Internal Server Error', error: err.message});
        }
    },

    getTodoById: async (req, res) => {

        try{

        const id = req.params.id;
        // const todo = todoDBOperations.getById(id);

        const todo = await Todo.findById(id);

        if(!todo){
            return res.status(404).json({status: 'error', message: 'Todo not found'});
        }

        return res.status(200).json({status: 'success', message: 'Todo retrieved successfully', data: todo});

        }
        catch(err){
            console.error("Error occurred while retrieving todo:", err);
            return res.status(500).json({status: 'error', message: 'Internal Server Error', error: err.message});
        }   

    },

    deleteTodoById: async (req, res) => {

        try{

            const id = req.params.id;
            // todoDBOperations.deleteById(id);
            // const deletedTodo = await Todo.deleteOne({ _id: id });
            const deletedTodo = await Todo.findByIdAndDelete(id);

            if(!deletedTodo){
                return res.status(404).json({status: 'error', message: 'Todo not found'});
            }
            return res.status(200).json({status: 'success', message: 'Todo deleted successfully'});

        }
        catch(err){
            console.error("Error occurred while deleting todo:", err);
            return res.status(500).json({status: 'error', message: 'Internal Server Error', error: err.message});
        }

    },
    
    updateTodoById: async (req, res) => {

        try{
            const id = req.params.id;
            const updatedTodo = req.body;
            // todoDBOperations.updateById(id, updatedTodo);
            const todo = await Todo.findByIdAndUpdate(id, updatedTodo);
            if(!todo){
                return res.status(404).json({status: 'error', message: 'Todo not found'});
            }
            
            return res.status(200).json({status: 'success', message: 'Todo updated successfully'});
        }
        catch(err){
            console.error("Error occurred while updating todo:", err);
            return res.status(500).json({status: 'error', message: 'Internal Server Error', error: err.message});
        }
    
    }   
}


module.exports = todoController;