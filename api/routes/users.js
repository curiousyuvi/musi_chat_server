const express = require("express");
const User = require("../models/user");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Users fetched",
  });
});

router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    phoneNumber: req.body.phoneNumber,
    name: req.body.name,
    avatarURL: req.body.avatarURL,
  });

  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: `User ${req.body.name} created`,
        createdDoc: user,
      });
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(user);
});

module.exports = router;
