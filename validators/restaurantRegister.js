const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.address = !isEmpty(data.address) ? data.address : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "name Field is Required";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "phone Field is Required";
  }
  if (Validator.isEmpty(data.address)) {
    errors.address = "address Field is Required";
  }

  if (getFullYear() <= parseInt(data.year) || parseInt(data.year) <= 2000) {
    errors.year = "Release Year is Invalid";
  }

  // if (Validator.isEmpty(data.year)){errors.year = 'Release Year Field is Required';}

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
