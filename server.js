// import modules
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Database Connection
mongoose
  .connect(process.env.M_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("DB connected");
    },
    (error) => {
      console.log("DB failed to connect," + error);
    }
  );

// express app
const app = express();
app.use(express.json());

// middle ware parsers
app.use(express.urlencoded({ extended: false }));

// APi route
const userRoute = require("./routes/user.route");
app.use("/users", userRoute);

// Index Route
app.get("/", (req, res) => {
  res.sendFile("/index.html", { root: __dirname });
});

// start the server listening for requests

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
