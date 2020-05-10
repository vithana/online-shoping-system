const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/orderController");

// @route GET api/orders/all
// @desc Get All Orders
// @access Public
router
    .route("/all")
    .get(
        controllers.findAllOrders
    );

// @route POST api/orders/store
// @desc Create order
// @access Public
router
    .route("/store")
    .post(
        controllers.createOrder
    );

// @route GET api/orders/get
// @desc Get an Order
// @access Public
router
    .route("/get")
    .get(
        controllers.findOrderByID
    );

// @route PUT api/orders/update
// @desc Update an Order
// @access Public
router
    .route("/update")
    .put(
        controllers.updateOrder,
    );

// @route DELETE api/orders/delete
// @desc Delete an Order
// @access Public
router
    .route("/delete")
    .put(
        controllers.deleteOrder,
    );

module.exports = router;
