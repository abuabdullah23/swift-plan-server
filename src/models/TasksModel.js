const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    userEmail: {
        type: String,
        require: true,
        trim: true
    },
    status: {
        type: String,
        default: 'to-do'
    },
    priority: {
        type: String,
        require: true,
        trim: true
    },
    deadline: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    }
}, { timestamps: true })

module.exports = model('Tasks', TaskSchema);