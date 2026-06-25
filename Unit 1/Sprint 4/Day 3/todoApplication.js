const fs = require('fs')


const fileName = 'todos.json'



function addTodos(fileName, todo){
        //To Create File
        fs.readFile(fileName, 'utf-8' ,(err, data)=>{
            if(err){
                console.log(err.message)
                return
            }

            let todos = JSON.parse(data)
            todos.push(todo)

            fs.writeFile(fileName, JSON.stringify(todos, null, 2), (err)=>{
                if(err){
                    console.log("Error while adding todo")
                    return 
                }
                console.log("Todo has added successfully")
            })
        })
}


function deleteTodo(fileName, id){
        //To Create File
        fs.readFile(fileName, 'utf-8' ,(err, data)=>{
            if(err){
                console.log(err.message)
                return
            }

            let todos = JSON.parse(data)
            todos = todos.filter(todo=>todo.id!=id)

            fs.writeFile(fileName, JSON.stringify(todos, null, 2), (err)=>{
                if(err){
                    console.log("Error while adding todo")
                    return 
                }
                console.log("Todo has deleted successfully")
            })
        })
}


function getTodoById(fileName, id){
        //To Create File
        fs.readFile(fileName, 'utf-8' ,(err, data)=>{
            if(err){
                console.log(err.message)
                return
            }

            let todos = JSON.parse(data)
            let particularTodo = todos.find(todo=>todo.id==id)
            
            if(!particularTodo){
                console.log("Invalid Todo Id")
                return
            }

            console.log(particularTodo)

        })
}


//addTodos(fileName, {id: 2, task: "Meet Chintu at Evening", priority:"Low"})
// deleteTodo(fileName, 1)

//getTodoById(fileName, 2)

//addTodos(fileName, {id: 1, task: "Complete React Assignment", priority:"High"})

getTodoById(fileName, 10)

