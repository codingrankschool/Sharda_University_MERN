const fs = require('fs');

const fileName = './data/todos.json';

const todoDBOperations = {
    save: (todo) => {
        try{
            const todos = JSON.parse(fs.readFileSync(fileName));

            todos.push(todo);

            fs.writeFileSync(fileName, JSON.stringify(todos, null, 2));
            return todo;
        }
        catch(err){
            console.error("Error occurred while adding todo:", err);
            throw new Error('Internal Server Error');
        }
    },
    
    getAll: () => {
        try{
            const todos = JSON.parse(fs.readFileSync(fileName));
            return todos;
        }
        catch(err){
            console.error("Error occurred while retrieving todos:", err);
            throw new Error('Internal Server Error');
        }
    },
    getById: (id) => {
        try{
            const todos = JSON.parse(fs.readFileSync(fileName));
            const todo = todos.find(todo => todo.id == id);
            if(!todo){
                throw new Error('Todo not found');
            }
            return todo;
        }
        catch(err){
            console.error("Error occurred while retrieving todo:", err);
            throw new Error('Internal Server Error');
        }
    },
    deleteById: (id) => {
        try{
            const todos = JSON.parse(fs.readFileSync(fileName));
            const updatedTodos = todos.filter(todo => todo.id != id);
            fs.writeFileSync(fileName, JSON.stringify(updatedTodos));
            return;
        }
        catch(err){
            console.error("Error occurred while deleting todo:", err);
            throw new Error('Internal Server Error');
        }
    },
    updateById: (id, updatedTodo) => {
        try{
            const todos = JSON.parse(fs.readFileSync(fileName));
            const index = todos.findIndex(todo => todo.id == id);
            if(index === -1){
                throw new Error('Todo not found');
            }
            todos[index] = {...todos[index], ...updatedTodo};
            fs.writeFileSync(fileName, JSON.stringify(todos));
            return todos[index];
        }
        catch(err){
            console.error("Error occurred while updating todo:", err);
            throw new Error('Internal Server Error');
        }
    }
}

module.exports = todoDBOperations;