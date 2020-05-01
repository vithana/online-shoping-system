const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router
    .route("/register")
    .post(
        controllers.registerUser
    );

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router
    .route("/login")
    .post(
        controllers.login
    );




module.exports = router;
