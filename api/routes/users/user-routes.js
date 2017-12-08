var express        = require('express');
var router         = express.Router();
var UserController = require('./user-controller');

router.route('/')
    .post(UserController.createUser)
    .get(UserController.getUsers);

router.route('/:id')
    .get(UserController.getUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser);

module.exports = router;