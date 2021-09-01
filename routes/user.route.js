// import modules
const express = require("express");
const app = express();
// Express route
const userExpressRoute = express.Router();

// User schema
const UserSchema = require("../models/user.model");

// Get route for users
userExpressRoute.route("/").get((req, res) => {
  UserSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Create user which will make a post request
userExpressRoute.route("/create-user").post((req, res, next) => {
  UserSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get single user by id
userExpressRoute.route("/get-user/:id").get((req, res) => {
  UserSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
//Update user by id
userExpressRoute.route("/update-user/:id").get((req, res, next) => {
  UserSchema.findByIdAndUpdate(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Delete user by ID
userExpressRoute.route("/remove-user/:id").delete((req, res) => {
  UserSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
module.exports = userExpressRoute;
