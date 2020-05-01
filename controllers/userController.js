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
const services = require("../services/userService")

//Register New User
module.exports.registerUser =async (req,res) => {

    // Validation
    const { errors, isValid } = validateRegisterInput(req.body);
    const user = await services.registerUser(req.body,res)

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
};

//Login User
module.exports.login = async (req,res) => {

    //Validation
    const { errors, isValid } = validateLoginInput(req.body);
    const user = await services.login(req.body,res)

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
};
