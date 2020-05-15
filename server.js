const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const orders = require("./routes/api/orders");
const product  = require("./routes/api/products");
const categories = require('./routes/api/categories');
const review = require("./routes/api/reviews");
const cart = require("./routes/api/carts");

const app = express();

//Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/orders", orders);
app.use("/api/products" , product);
app.use("/api/carts", cart);
app.use("/api/reviews", review);
app.use('/api/categories', categories);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up no running on port ${port} !`));
