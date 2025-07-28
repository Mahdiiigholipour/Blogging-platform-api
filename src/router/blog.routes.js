const router = require("express").Router();
const BlogController = require("../controller/blog.controller");
const BlogValidation = require("../validation/blog.validation");
const validateReq = require("../common/middleware/validateRequest");

router
  .route("/")
  .get(BlogValidation.getAllBlogs, validateReq, BlogController.getAllBlogs)
  .post(BlogValidation.createBlog, validateReq, BlogController.createBlog);

module.exports = { BlogRoutes: router };
