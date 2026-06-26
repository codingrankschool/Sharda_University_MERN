const express = require('express');
const todoRouter = require('./routes/todo.route');
const connectDB = require('./configs/connection');

const app = express();
app.use(express.json());


app.use('/todos', todoRouter);


app.listen(8080, () => {
    connectDB();
    console.log('Server is running on port 8080');
})