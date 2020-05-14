const express = require("express");

// Load Cart model
const Cart = require("../models/Cart");

//Find all Carts
module.exports.findAllCartItems =async (body,res) => {

    return Cart.find()
        .then(carts => res.json(carts))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of carts."
            });
        });

};

//Create New cart
module.exports.createCart =async (body, res) => {

    let products = JSON.parse(body.products);

    // Create a new cart
    const cart = new Cart({
        status: body.status,
        user_id: body.user_id ? body.user_id : "",
        products: products
    });

    // Save cart in the database
    cart.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while creating new cart."
        });
    });
};

//Find one cart
module.exports.findCartByID =async (id, body,res) => {

    Cart.findById(id)
        .then(cart => {
            if(!cart) {
                return res.status(404).send({
                    message: "Cart not found with id " + id
                });
            }
            res.send(cart);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cart not found with id " + id
            });
        }
        return res.status(500).send({
            message: "Error getting cart with id " + id
        });
    });

};

//Update a cart
module.exports.updateCart =async (id, body,res) => {

    let products;

    if (body.products){
        products = JSON.parse(body.products);
    }


    // Find cart and update it with the request body
    Cart.findByIdAndUpdate(id, {
        status: body.status,
        user_id: body.user_id ? body.user_id : "",
        products: products? products : ""
    }, {new: true})
        .then(cart => {
            if(!cart) {
                return res.status(404).send({
                    message: "Cart not found with id " + id
                });
            }
            res.send(cart);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cart not found with id " + id
            });
        }
        return res.status(500).send({
            message: "Error updating cart with id " + id
        });
    });
};

//Delete a cart
module.exports.deleteCart =async (id, body,res) => {

    Cart.findByIdAndRemove(id)
        .then(cart => {
            if(!cart) {
                return res.status(404).send({
                    message: "Cart not found with id " + id
                });
            }
            res.send({message: "Cart deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Cart not found with id " + id
            });
        }
        return res.status(500).send({
            message: "Could not delete cart with id " + id
        });
    });
};
