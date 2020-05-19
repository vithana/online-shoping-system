const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const CartSchema = new Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        products: [{
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product",
                required: true,
            },
            qty: {
                type: Number,
                required: true,
            },
            price:{
                type: Number,
                required: true,
            },
            discount:{
                type: Number,
                default: 0,
            },
        }],

    },
    { timestamps: true },
);

module.exports = Cart = mongoose.model("cart", CartSchema);
