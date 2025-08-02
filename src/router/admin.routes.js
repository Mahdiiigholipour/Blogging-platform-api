const router = require("express").Router();
const BlogController = require("../controller/blog.controller");
const BlogValidation = require("../validation/blog.validation");
const validateReq = require("../common/middleware/validateRequest");
const authGuard = require("../common/middleware/authorization");
router
  .use(authGuard, BlogValidation.idInParams, validateReq)
  .route("/blog/:id")
  .get(BlogController.getBlogById)
  .put(
    BlogValidation.updateBlogById,
    validateReq,
    BlogController.updateBlogById
  )
  .delete(BlogController.deleteBlogById);

module.exports = { AdminRoutes: router };
