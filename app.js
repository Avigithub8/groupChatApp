const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const db=require('./utils/db.js');
const User = require('./models/users.js');
const cors=require("cors");
const env = require("dotenv");
env.config()


const userRoutes = require('./routes/userRoutes');

const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public',express.static(path.join(__dirname,'public')));
//app.use(express.static(__dirname,'public'));
// app.use(cors({
//     origin:'http://localhost:5000', 
// }))


app.use("/user", userRoutes);


app.get('/', (req, res) => { 
    res.send('A simple Node App is '
        + 'running on this server') 
    
    res.end() 
}) 


 


db.sync()
.then(() => {
  console.log('Database synced');
})
.catch((error) => {
  console.error('Error syncing database:', error);
});


const PORT = 5000;
app.listen(PORT,console.log(
  `Server started on port ${PORT}`))

