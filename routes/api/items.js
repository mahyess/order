const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const passport = require("passport");
// const keys = require('../../config/keys');

// // Load Input Validations
// const validateItemRegisterInput = require("../../validators/itemRegister");

// Load Item model
const Item = require("../../models/Item");

// @route 	GET api/item/test
// @desc 	Tests item route
// @access 	Public
router.get("/test", (req, res) => res.json({ msg: "Item test api Works" }));

// @route 	GET api/item/register
// @desc 	register new user
// @access 	Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateItemRegisterInput(req.body);

  // check validations
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Item.findOne({
    title: req.body.title,
    amounts: [{ restaurant: Operator.findOne({ user: req.user }) }]
  }).then(item => {
    if (item) {
      // console.log(item);
      errors.model = "Item already exists";
      return res.status(400).json(errors);
    } else {
      const newItem = new Item({
        title: req.body.title,
        amountInPaisa: req.body.amountInPaisa,
        description: req.body.description
      });
    }
  });
});

module.exports = router;
