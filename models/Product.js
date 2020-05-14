const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const ProductSchema = new Schema({

    productName : {
        type : String ,
        require : true
    },

    productDescription :{
        type: String ,
        require: true
    },

    productPrice :  {
        type : Number,
        require : true

    },

    shippingPrice : {
        type : Number ,
        require : false

    },

    productStockQuantity : {

        type : Number ,
        require : false

    },

    productDiscount : {

        type : Number ,
        require : false
    },


    productColor : {

        type :String ,
        require : false
    },

    //Is product in cloth
    productAvailableSize : {

        type : String,
        require : false

    },

    //Is product in technical Item
    bundle : {
        type : String,
        require : false
    },

    // categories: [{
    //     categories_id: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "category",
    //         required: true,
    //     }
    // }],


},

{ timestamps: true },

);

module.exports = Product = mongoose.model("product" , ProductSchema);

