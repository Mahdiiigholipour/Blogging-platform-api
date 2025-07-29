const { body } = require("express-validator");
const { body } = require("express-validator");

const adminRules = {
  name: body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long.")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Name must contain only letters."),
  email: body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Please provide a valid email address."),
  password: body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter.")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter.")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number.")
    .matches(/[@$!%*?&#]/)
    .withMessage("Password must contain at least one special character."),
};

exports.register = [adminRules.name, adminRules.email, adminRules.password];
exports.login = [adminRules.email, adminRules.password];
