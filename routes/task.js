const router = require('express').Router();
const { authenticateJWT } = require('../middleware/auth');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskcontroller');

router.use(authenticateJWT);

router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
