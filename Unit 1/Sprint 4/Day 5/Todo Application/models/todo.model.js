const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: { 
        type: String, 
        required: true,
        trim: true 
    },
    priority: { 
        type: String, 
        required: true,
        trim: true 
    },
    user: { 
        type: String, 
        required: true,
        trim: true 
    }
}, {versionKey: false, timestamps: true});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;