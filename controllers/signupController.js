const path = require("path");
const Users = require('../models/user.js');
const bcrypt = require('bcrypt');

exports.getSignup=(req,res)=>{
    res.sendFile(path.join(__dirname, '../public/html/signup.html'));
     
 }

exports.signup = (req, res, next) => {
    const data = req.body;
    console.log(data.email);
    Users.findAll({ where: { email: data.email } })
        .then(user => {
            // if user found
            if (user.length > 0) {
                return res.status(302).json({ message: 'User already exists' });
            }
            // if user not found
            else {
                const saltRounds = 8;
                bcrypt.hash(data.password, saltRounds, async (err, hash) => {
                    // console.log(err);
                    user = await Users.create({
                        name: data.name,
                        email: data.email,
                        number: data.number,
                        password: hash
                    });
                    res.status(200).json({ message: 'User is now registered' });
                })
            }
        })
        .catch(err => console.log(err));
};