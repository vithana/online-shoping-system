const express = require("express");

//Load Model
const product = require("../models/Product");

//Read All Product
module.exports.findAllproduct =async (body, res) => {

    return product.find()
        .then(products => res.json(products))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of Products."
            });
        });
};



//Insert Product
module.exports.insertProduct = async (body, res) => {

//Plese add code for when i get from ato code by categories

    const products = new product({

        productName : body.productName ,
        productDescription : body.productDescription ,
        productPrice : body.productPrice ,
        shippingPrice : body.shippingPrice ,
        productStockQuantity : body.productStockQuantity ,
        productDiscount : body.productDiscount ,
        productColor : body.productColor ,
        productAvailableSize : body.productAvailableSize,
        bundle : body.bundle

    });


    //Save Database
    products
        .save()
        .then(order => console.log(order))
        .catch(err => console.log(err));

    return product;
};

//update product
module.exports.updateProduct = async  (id , body , res) =>{

    //get categorie here

    product.findByIdAndUpdate(id , {
        productName : body.productName ,
        productDescription : body.productDescription ,
        productPrice : body.productPrice ,
        shippingPrice : body.shippingPrice ,
        productStockQuantity : body.productStockQuantity ,
        productDiscount : body.productDiscount ,
        productColor : body.productColor ,
        productAvailableSize : body.productAvailableSize,
        bundle : body.bundle

        //if you want aadd user idc code is here
        //update categoriy here

    }, {new : true})
        .then(product => {
            if(!product) {
                return res.status(404).send({
                    message: "Product not found with id " + id
                });
            }
            res.send(product);
        }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product  not found with id " + id
            });
        }

        return res.status(500).send({
            message: "Error updating Product with id " + id
        });

    });

};
