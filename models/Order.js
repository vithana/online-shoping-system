const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        payment_type: {
            type: String,
            required: true
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
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
        }],
    },
    { timestamps: true },
);

module.exports = Order = mongoose.model("order", OrderSchema);
