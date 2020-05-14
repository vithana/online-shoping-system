const express = require("express");
const router = express.Router()

const productController = require("../../controllers/productController");

// @route GET api/products/allproducts
// @desc Get All Products
// @access Public
router
    .route("/allproducts")
    .get(
        productController.findAllProducts
    );

// @route GET api/products/oneProduct
// @desc Get one Product
// @access Public
router
    .route("/oneProduct/:id")
    .get(
        productController.findOneProduct
    );


// @route POST api/products/store
// @desc Insert product
// @access Public
router
    .route("/insert")
    .post(
       productController.insertProduct
    );

// @route PUT api/products/update/:id
// @desc Update an Product
// @access Public
router
    .route("/update/:id")
    .put(
        productController.updateProduct
    );


// @route DELETE api/products/delete/:id
// @desc Delete an Product
// @access Public
router
    .route("/delete/:id")
    .delete(
       productController.deleteProduct
    );

module.exports = router;
