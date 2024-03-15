const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require('mongoose');
require('./utils/db.js');
const User = require('./models/user.js');
//const authRoutes = require('./routes/auth');
const env = require("dotenv");
env.config()


const userRoutes = require('./routes/userRoutes');

const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public',express.static(path.join(__dirname,'public')));



app.use("/user", userRoutes);

app.get('/', (req, res) => { 
    res.send('A simple Node App is '
        + 'running on this server') 
    res.end() 
}) 
 


 


const PORT = 5000;
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));