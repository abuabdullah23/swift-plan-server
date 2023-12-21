const { addNewTask, getMyTasks, deleteMyTask, updateMyTask, updateTaskStatus } = require('../controllers/taskControllers/taskControllers');
const verifyJWT = require('../middleware/verifyJWT');
const router = require('express').Router();

router.post('/add-task', verifyJWT, addNewTask);
router.get('/get-my-tasks/:email', verifyJWT, getMyTasks);
router.put('/update-my-task/:id', verifyJWT, updateMyTask);
router.delete('/delete-my-task/:id', verifyJWT, deleteMyTask);
router.put('/update-task-status/:id', verifyJWT, updateTaskStatus)

module.exports = router;