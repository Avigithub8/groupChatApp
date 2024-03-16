const path = require("path");
const Users = require('../models/users.js');
const bcrypt = require('bcrypt');

exports.getSignup=(req,res)=>{
    res.sendFile(path.join(__dirname, '../public/html/signup.html'));
     
 }

exports.signup = (req, res, next) => {
    const data = req.body;
    console.log("hgsjfah",data.email);
    Users.findAll({ where: { email: data.email } })
    
        .then(user => {
            // if user found
            console.log("-------")
            if (user.length > 0) {
                return res.status(302).json({ message: 'User already exists' });
            }
            // if user not found
            else {
                console.log("=========")
                const saltRounds = 8;
                bcrypt.hash(data.password, saltRounds, async (err, hash) => {
                    console.log("........");
                    user = await Users.create({
                        name: data.name,
                        email: data.email,
                        phonenumber: data.phonenumber,
                        password: hash
                    });
                    res.status(200).json({ message: 'User is now registered' });
                })
            }
        })
        .catch(err => console.log(err));
};