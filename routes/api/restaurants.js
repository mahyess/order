const express = require("express");
const router = express.Router();
// const keys = require('../../config/keys');

// // Load Input Validations
const validateRestaurantRegisterInput = require("../../validators/restaurantRegister");

// Load Restaurant model
const Restaurant = require("../../models/Restaurant");

// @route 	GET api/restaurant/test
// @desc 	Tests restaurant route
// @access 	Public
router.get("/test", (req, res) =>
  res.json({ msg: "Restaurant test api Works" })
);

// @route 	GET api/restaurant/register
// @desc 	register new user
// @access 	Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRestaurantRegisterInput(req.body);

  // check validations
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Restaurant.findOne({ name: req.body.name, phone: req.body.phone }).then(
    restaurant => {
      if (restaurant) {
        // console.log(restaurant);
        errors.model = "Restaurant already exists";
        return res.status(400).json(errors);
      } else {
        const newRestaurant = new Restaurant({
          name: req.body.name,
          phone: req.body.phone,
          address: req.body.address
        });
      }
    }
  );
});

module.exports = router;
