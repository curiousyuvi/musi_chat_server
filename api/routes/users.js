const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Users fetched",
  });
});

// router.post("/:userId", (req, res, next) => {
//   const userId = req.params.userId;
//   res.status(200).json({
//     message: `User ${userId} created`,
//     userId: userId,
//   });
// });

router.post("/", (req, res, next) => {
  const user = {
    phoneNumber: req.body.phoneNumber,
    name: req.body.name,
    avatarURL: req.body.avatarURL,
  };

  console.log(user);

  res.status(200).json({
    message: `User ${user.name} created`,
  });
});

module.exports = router;
