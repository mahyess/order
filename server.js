const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const items = require("./routes/api/items");
const restaurants = require("./routes/api/restaurants");

const app = express();

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("mongoDB Connected"))
  .catch(err => console.log(err));

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// use Routes
app.use("/api/users", users);
app.use("/api/items", items);
app.use("/api/restaurants", restaurants);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
