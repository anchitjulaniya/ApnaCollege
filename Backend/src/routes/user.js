const express = require('express');
const userController = require('../controller/user');

const router = express.Router();

// signup
router.post('/signup', userController.signup);

// login
router.post('/login', userController.login);

// logout
router.post('/logout', userController.logout);

module.exports = router;
