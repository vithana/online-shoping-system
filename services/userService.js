const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load User model
const User = require("../models/User");

//Register New User
module.exports.registerUser =async (body,res) => {

    User.findOne({ email: body.email }).then(user => {

        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                name: body.name,
                email: body.email,
                password: body.password,
                userRole: body.userRole
            });

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
};

//Login User
module.exports.login = async(body,res) => {

    User.findOne({ email: body.email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        // Check password
        bcrypt.compare(body.password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name,
                    userRole: user.userRole
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });

};

//get all users
module.exports.findAllUsers = async (body,res) => {
    return User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err));
};


//find one user
module.exports.findUser = async (id,body,res) => {

    return User.findById(id)
        .then( user => {
            if ( !user ) {
                return res.status(404).json({
                    message: "User not found"
                })
            }
            res.json(user) ;
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Order not found with id " + id
                });
            }
            return res.status(500).send({
                message: "Error getting user with id " + id
            });
        })
};

//Update User
module.exports.updateUser = async (id,body,res) => {

    if (  !body ){
        return res.status(400).send({
            message: "Please fill all required fields"
        });
    }
    User.findByIdAndUpdate(id,{
        name: body.name
    },
        {new: true})
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + id
                })
            }
            res.json(user);
        }).catch(err => {
            if(err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "user not found with id " + id
                })
            }
            return res.status(500).send({
                message: "Error updating user with id" + id
            })
    })
};

//delete User
module.exports.deleteUser = async (id,res) => {
    User.findByIdAndRemove(id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id : " + id
                })
            }
            res.send({message: "User Deleted"});
        }).catch(err => {
            if (err.kind === "ObjectId" || err.name === "NotFound"){
                return res.status(404).send({
                    message: "User not found with id " + id
                })
            }
    })
};

module.exports.changePassword = async(id,body,res) => {
    User.find(id)
        .then( user => {
            if ( !user ) {
                return res.status(404).json({
                    message: "User not found"
                })
            }
            bcrypt.compare(body.password, user.password).then(isMatch =>{
                if (isMatch) {
                    user.password = body.password;
                }

            })
        })

}
