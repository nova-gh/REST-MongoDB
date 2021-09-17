// import modules
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");

// Database Connection
mongoose
  .connect(dbConfig.db, { useNewUrlParser: true, useUnifiedTopology: true })
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
app.use(cors());

// middle ware parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// APi route
const userRoute = require("./routes/user.route");
app.use("/users", userRoute);

// Index Route
app.get("/", (req, res) => {
  res.send("Invaild endpoint. Try domain.com/users");
});

// start the server listening for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
