const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require('./routes/api/user.route');
const buildingRoute = require("./routes/api/building.route");
var session = require('express-session');
const app = express();

// Bodyparser middleware
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


// Routes
app.use('/api/user', users);
app.use("/api/building", buildingRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
