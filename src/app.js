const express = require("express");
const router = require("./blog/router");

const app = express();

require("./config/mongoose");

app.use(router);
module.exports = app;
