const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateBuildingInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.location = !isEmpty(data.location) ? data.location : "";
    data.type = !isEmpty(data.type) ? data.type : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Building name field is required";
    }

    if (Validator.isEmpty(data.location)) {
        errors.location = "Building location field is required";
    }

    if (Validator.isEmpty(data.type)) {
        errors.type = "Building type field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
