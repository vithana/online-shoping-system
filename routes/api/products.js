const express = require("express");
const router = express.Router();

const productController = require("../../controllers/productController");

// @route GET api/orders/all
// @desc Get All Orders
// @access Public
router
    .route("/all")
    .get(
        productController.findAllProducts()
    );

// @route POST api/products/add
// @desc Insert Product
// @access Public
router
    .route("/add")
    .post(
        productController.insertProduct()
    );
