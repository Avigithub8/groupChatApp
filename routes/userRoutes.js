const express = require('express');

const router = express.Router();

const signupController = require('../controllers/signupController');
//const loginController = require('../controller/login');

router.get('/signup.html',signupController.getSignup)
router.post('/signup', signupController.signup);
//router.post('/login', loginController.login);

module.exports = router;