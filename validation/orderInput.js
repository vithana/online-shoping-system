const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCreateOrderInput(data) {
    let errors = {};

    // Convert empty fields to an empty string to validator functions
    data.total = !isEmpty(data.total) ? data.total : "";
    data.status = !isEmpty(data.status) ? data.status : "";
    data.payment_type = !isEmpty(data.payment_type) ? data.payment_type : "";
    data.billing_address = !isEmpty(data.billing_address) ? data.billing_address : "";
    data.billing_city = !isEmpty(data.billing_city) ? data.billing_city : "";

    // total checks
    if (Validator.isEmpty(data.total)) {
        errors.total = "Total is required";
    }

    // status checks
    if (Validator.isEmpty(data.status)) {
        errors.status = "Status is required";
    }

    //payment_type checks
    if (Validator.isEmpty(data.payment_type)) {
        errors.payment_type = "Payment Type field is required";
    }

    //billing_address checks
    if (Validator.isEmpty(data.billing_address)) {
        errors.payment_type = "Billing Address field is required";
    }

    //billing_city checks
    if (Validator.isEmpty(data.billing_city)) {
        errors.payment_type = "Billing City field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
