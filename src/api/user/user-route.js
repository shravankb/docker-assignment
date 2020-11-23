const router = require('express').Router();
const userController = require('./userController');

router.post('/', userController.addNewUser);

router.get('/:userId', userController.findUser);

router.get('/', userController.fetchUsers);

router.delete('/', userController.deleteUser);

module.exports = router;
