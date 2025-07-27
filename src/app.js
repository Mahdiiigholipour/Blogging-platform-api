const express = require("express");
const router = require("./blog/router");
const {
  notFoundHandler,
  exceptionHandler,
} = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose");

app.use(router);

app.use(notFoundHandler);
app.use(exceptionHandler);
module.exports = app;
