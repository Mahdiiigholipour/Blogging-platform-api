const router = require("express").Router();
const validate = require("../middleware/validator");
const Controller = require("./controller");
const Validation = require("./validation");

router
  .route("/blog")
  .get(Validation.getAllBlogs, validate, Controller.getAllBlogs)
  .post(Validation.createBlog, validate, Controller.createBlog);

router
  .use(Validation.idInParams, validate)
  .route("/blog/:id")
  .get(Controller.getBlogById)
  .put(Validation.updateBlogById, validate, Controller.updateBlogById)
  .delete(Controller.deleteBlogById);

module.exports = router;
