const express = require('express');
const userController = require('../controllers/userControllers');

const router = express.Router();
router.route('/user/login').get(userController.getAllUserList);
router.route('/user/login').post(userController.createUser);
router.route('/user/login:id').get(userController.getUserList);
router.route('/user/login/:id').patch(userController.updateUser);
router.route('/user/login/:id').delete(userController.deleteUser);

module.exports = router;
