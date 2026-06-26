const express = require('express');

const app = express();
app.use(express.json());


let todos = []

/*
todo = {
id: 
task:
priority:
user:
}

*/

//Creating the Todo
app.post('/todos', (req, res) => {

    const todo = req.body;
    todos.push(todo);

    res.status(201).json({status: 'success', message: 'Todo added successfully', data: todo});

})

//To get all the todos
app.get('/todos', (req, res) => {

    res.status(200).json({status: 'success', message: 'Todos retrieved successfully', data: todos});

})

//To get a single todo by id
app.get('/todos/:id', (req, res) => {

    const id = req.params.id;
    const todo = todos.filter(todo => {
        if(todo.id == id){
            return todo;
        }
    });

    if(!todo){
        return res.status(404).json({status: 'error', message: 'Todo not found'});
    }

    res.status(200).json({status: 'success', message: 'Todo retrieved successfully', data: todo});

})

//To delete a todo by id
app.delete('/todos/:id', (req, res) => {

    const {id} = req.params; 
    todos = todos.filter(todo => todo.id != id);
    res.status(200).json({status: 'success', message: 'Todo deleted successfully'});
})

//To update a todo by id
app.put('/todos', (req, res) => {

    const todoToUpdate = req.body; 
    todos = todos.map(todo =>{
        if(todo.id == todoToUpdate.id){
            // todo.task = todoToUpdate.task;
            // todo.priority = todoToUpdate.priority;
            // todo.user = todoToUpdate.user;

            // todo = {...todo, ...todoToUpdate}

            todo = {
                ...todo,
                name: todoToUpdate.task,
                priority: todoToUpdate.priority,
                user: todoToUpdate.user
            }
        }
        return todo;
    })
    res.status(200).json({status: 'success', message: 'Todo updated successfully'});
})


app.listen(8000, () => {
    console.log('Server is running on port 8000');
})