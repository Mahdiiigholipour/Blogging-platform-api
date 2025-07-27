const { body } = require("express-validator");
const { default: mongoose } = require("mongoose");

const isValidId = (value) => {
  if (!mongoose.Types.ObjectId.isValid(value))
    throw new Error("Validation Error : invalid id");

  return true;
};

const createBlog = [
  body("title")
    .isString()
    .withMessage("Title must be a string")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 5, max: 100 })
    .withMessage("Title must be between 5 and 100 characters"),

  body("content")
    .isString()
    .withMessage("Content must be a string")
    .notEmpty()
    .withMessage("Content is required")
    .isLength({ min: 20 })
    .withMessage("Content must be at least 20 characters long"),

  body("category")
    .isString()
    .withMessage("Category must be a string")
    .notEmpty()
    .withMessage("Category is required"),

  body("tags")
    .isArray()
    .withMessage("Tags must be an array of strings")
    .custom((arr) => arr.every((tag) => typeof tag === "string"))
    .withMessage("All tags must be strings"),
];

const updateBlogById = [
  body("title")
    .optional()
    .isString()
    .withMessage("Title must be a string")
    .isLength({ min: 5, max: 100 })
    .withMessage("Title must be between 5 and 100 characters"),

  body("content")
    .optional()
    .isString()
    .withMessage("Content must be a string")
    .isLength({ min: 20 })
    .withMessage("Content must be at least 20 characters long"),

  body("category")
    .optional()
    .isString()
    .withMessage("Category must be a string"),

  body("tags")
    .optional()
    .isArray()
    .withMessage("Tags must be an array of strings")
    .custom((arr) => arr.every((tag) => typeof tag === "string"))
    .withMessage("All tags must be strings"),
];

const idInParams = [param("id").custom(isValidId)];

module.exports = { createBlog, updateBlogById, idInParams };
