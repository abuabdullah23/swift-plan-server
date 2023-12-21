const { addNewTask } = require('../controllers/taskControllers/taskControllers');
const verifyJWT = require('../middleware/verifyJWT');
const router = require('express').Router();

router.post('/add-task', verifyJWT, addNewTask);

module.exports = router;