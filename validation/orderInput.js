const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCreateOrderInput(data) {
    let errors = {};

    // Convert empty fields to an empty string to validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.total = !isEmpty(data.total) ? data.total : "";
    data.status = !isEmpty(data.status) ? data.status : "";
    data.payment_type = !isEmpty(data.payment_type) ? data.payment_type : "";

    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    // Email checks
    if (Validator.isEmpty(data.total)) {
        errors.total = "Total is required";
    }

    // Password checks
    if (Validator.isEmpty(data.status)) {
        errors.status = "Status is required";
    }

    if (Validator.isEmpty(data.payment_type)) {
        errors.payment_type = "Payment Type field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
