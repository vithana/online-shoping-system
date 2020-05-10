const express = require("express");

// Load Order model
const Order = require("../models/Order");

//Find all Orders
module.exports.findAllOrders =async (body,res) => {

    return Order.find()
        .then(orders => res.json(orders))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of orders."
            });
        });

};

//Create New Order
module.exports.createOrder =async (body) => {

    let products = [];

    // for (let i = 0; i < body.products.length; i++){
    //     products.push(body.products[i])
    // }
    // Create a new Order
    const order = new Order({
        name: body.name,
        total: body.total,
        status: body.status,
        payment_type: body.payment_type,
        user_id: body.user_id ? body.user_id : "",
        products: products
    });

    // Save order in the database
    order
        .save()
        .then(order => console.log(order))
        .catch(err => console.log(err));

    return order;
};

//Find one Order
module.exports.findOrderByID =async (body,res) => {

    Order.findById(body.id)
        .then(order => {
            if(!order) {
                return res.status(404).send({
                    message: "Order not found with id " + body.id
                });
            }
            res.send(order);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + body.id
            });
        }
        return res.status(500).send({
            message: "Error getting user with id " + body.id
        });
    });

};

//Update an Order
module.exports.updateOrder =async (body,res) => {

    let products = [];

    for (let i = 0; i < body.products.length; i++){
        products.push([body.products[i][0], body.products[i][1]])
    }

    // Find user and update it with the request body
    Order.findByIdAndUpdate(body.id, {
        name: body.name,
        total: body.total,
        status: body.status,
        payment_type: body.payment_type,
        user_id: body.user_id ? body.user_id : "",
        products: products
    }, {new: true})
        .then(order => {
            if(!order) {
                return res.status(404).send({
                    message: "Order not found with id " + body.id
                });
            }
            return order;
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + body.id
            });
        }
        return res.status(500).send({
            message: "Error updating user with id " + body.id
        });
    });

};

//Delete an Order
module.exports.deleteOrder =async (body,res) => {

    Order.findByIdAndRemove(body.id)
        .then(order => {
            if(!order) {
                return res.status(404).send({
                    message: "Order not found with id " + body.id
                });
            }
            res.send({message: "Order deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Order not found with id " + body.id
            });
        }
        return res.status(500).send({
            message: "Could not delete order with id " + body.id
        });
    });
};
