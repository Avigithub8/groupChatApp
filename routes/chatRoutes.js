const express = require('express');
const path = require("path");

const router = express.Router();

router.get('/home.html', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/html/home.html'))
    
} );


module.exports = router;