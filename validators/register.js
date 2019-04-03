const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.displayName = !isEmpty(data.displayName) ? data.displayName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.displayName, { min: 2, max: 30 })) {
    errors.displayName = "displayName must be between 2 to 30 characters";
  }
  if (Validator.isEmpty(data.displayName)) {
    errors.displayName = "displayName Field is Required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Field is Required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 to 30 characters";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Field is Required";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password Field is Required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
