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
        carts: [{
            cart_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "cart",
                required: true,
            },
            total: {
                type: Number,
                required: true,
            },
        }],
    },
    { timestamps: true },
);

module.exports = Order = mongoose.model("order", OrderSchema);
