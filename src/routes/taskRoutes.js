const { addNewTask, getMyTasks, deleteMyTask } = require('../controllers/taskControllers/taskControllers');
const verifyJWT = require('../middleware/verifyJWT');
const router = require('express').Router();

router.post('/add-task', verifyJWT, addNewTask);
router.get('/get-my-tasks/:email', verifyJWT, getMyTasks);
router.delete('/delete-my-task/:id', verifyJWT, deleteMyTask);


module.exports = router;