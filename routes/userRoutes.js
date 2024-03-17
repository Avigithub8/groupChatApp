const express = require('express');
const path = require("path");

const router = express.Router();

const signupController = require('../controllers/signupController');
//const loginController = require('../controller/login');

router.get('/login.html', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/html/login.html'))
    
} );
router.post('/login', (req,res)=>{
    res.json({message:"this is login success"})
    
} );

router.get('/signup.html',signupController.getSignup)
router.post('/signup', signupController.signup);
//router.post('/login', loginController.login);

module.exports = router;