const express = require("express");
const router = require("./router/router");
const AppError = require("./common/utils/Error");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./common/config/mongoose");

require("./common/config/swagger")(app);
app.use(router);

app.use(AppError.notFoundHandler);
app.use(AppError.globalErrorHandler);
module.exports = app;
