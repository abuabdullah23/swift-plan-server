const TasksModel = require("../../models/TasksModel");
const { responseReturn } = require("../../utils/response");

exports.addNewTask = async (req, res) => {
    const { name, userEmail, priority, deadline, description } = req?.body;

    try {
        await TasksModel.create({
            name: name.trim(),
            userEmail,
            priority,
            deadline,
            description: description.trim()
        })
        responseReturn(res, 200, { message: 'Task added successful' })

    } catch (error) {
        // console.log(error);
        responseReturn(res, 500, { error: error.message })
    }
}



// get my all tasks
exports.getMyTasks = async (req, res) => {
    const { email } = req.params;

    try {
        const total = await TasksModel.find({ userEmail: email }).countDocuments();

        const result = await TasksModel.find({ userEmail: email }).sort({ createdAt: - 1 })
        res.send({ total, result })
    } catch (error) {
        console.log(error.message);
    }
}


// Update task
exports.updateMyTask = async (req, res) => {
    const { name, userEmail, priority, deadline, description } = req?.body;
    const id = req.params.id;

    try {
        await TasksModel.findByIdAndUpdate(id, {
            name: name.trim(),
            userEmail,
            priority,
            deadline,
            description: description.trim()
        })
        responseReturn(res, 200, { message: 'Task Updated successful' })

    } catch (error) {
        // console.log(error);
        responseReturn(res, 500, { error: error.message })
    }
}


// delete my tasks
exports.deleteMyTask = async (req, res) => {
    const taskId = req.params.id;

    try {
        await TasksModel.findByIdAndDelete(taskId);
        responseReturn(res, 200, { message: 'Delete this task successful.' })
    } catch (error) {
        responseReturn(res, 500, { error: error.message })
    }
}


// update status
exports.updateTaskStatus = async (req, res) => {
    const filter = req.params.id;
    const update = req?.body?.updateStatus;

    try {
        await TasksModel.findByIdAndUpdate(filter, { status: update });
        responseReturn(res, 200, { message: 'Approved this article successful' })
    } catch (error) {
        responseReturn(res, 500, { error: error.message })
    }
}