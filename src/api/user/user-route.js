const router = require('express').Router();
const userController = require('./userController');

router.post('/', userController.addNewUser);

router.get('/fetchAll', userController.fetchUsers);

router.get('/:userId', userController.findUser);

router.delete('/:userId', userController.deleteUser);

module.exports = router;
