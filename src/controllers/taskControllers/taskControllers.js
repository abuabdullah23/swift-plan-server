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
        responseReturn(res, 200, { message: 'Article added successful' })

    } catch (error) {
        console.log(error);
        responseReturn(res, 500, { error: error.message })
    }
}