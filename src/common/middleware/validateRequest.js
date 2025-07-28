// src/middlewares/validateRequest.js
const { validationResult } = require("express-validator");
const AppError = require("../utils/Error");

module.exports = function validateRequest(req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    // map کردن خطاها به فرمت دلخواه
    const errors = result.array().map((err) => ({
      field: err.path,
      message: err.msg,
    }));

    return next(new AppError("Input Validation Error", 400, errors));
  }
  next();
};
