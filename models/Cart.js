const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const CartSchema = new Schema(
    {
        status: {
            type: String,
            required: true
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        products: [{
            product_id: {
                type: Number,
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
        }],

    },
    { timestamps: true },
);

module.exports = Cart = mongoose.model("cart", CartSchema);
