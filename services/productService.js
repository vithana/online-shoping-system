const express = require("express");

//Load Model
const product = require("../models/Product");

//Read All Product
const findAllproduct = () => {

    return product.find()
        .then((products) => {return products})
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of Products."
            });

        });
};



//Insert Product
const insertProduct = (body) => {

//Plese add code for when i get from ato code by categories
    return new Promise((resolve, reject) => {
        const products = {
            productName : body.productName ,
            productDescription : body.productDescription ,
            productPrice : body.productPrice ,
            shippingPrice : body.shippingPrice ,
            productStockQuantity : body.productStockQuantity ,
            productDiscount : body.productDiscount ,
            productColor : body.productColor ,
            productAvailableSize : body.productAvailableSize,
            bundle : body.bundle
        };

        product.create(products, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result);
            }
        });
    });


};

//update product
const updateProduct = (id , body , res) =>{

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


//find a product
const findOneproduct =  (id,res) => {

    product.findById(id)
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
                message: "product not found with id " + id
            });
        }
        return res.status(500).send({
            message: "Error getting product with id " + id
        });
    });

};



//Delete a Product
const deleteProduct = (id,res) => {

    product.findByIdAndRemove(id)
        .then(product => {
            if(!product) {
                return res.status(404).send({
                    message: "Product not found with id " + id
                });
            }
            res.send({message: "Product deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "product not found with id " + id
            });
        }
        return res.status(500).send({
            message: "Could not delete Product with id " + id
        });
    });
};

module.exports = {
    findAllproduct: () => findAllproduct(),
    deleteProduct: (id,res) => deleteProduct(id,res),
    insertProduct: (body) => insertProduct(body),
    updateProduct: (id, body , res) => updateProduct(id, body , res),
    findOneproduct: (id , res) => findOneproduct(id , res)
};
