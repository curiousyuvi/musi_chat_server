const express = require("express");
const app = express();
const morgan = require("morgan");
const userRoutes = require("./api/routes/users");

app.use(morgan("dev"));
app.use("/users", userRoutes);

app.use((req, res, next) => {
  res.status(200).json({
    message: "Root route accessed",
  });
});

module.exports = app;
