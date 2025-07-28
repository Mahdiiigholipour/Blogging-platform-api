const router = require("express").Router();
const validateReq = require("../middleware/validateRequest");
const Controller = require("./controller");
const Validation = require("./validation");

router
  .route("/blog")
  .get(Validation.getAllBlogs, validateReq, Controller.getAllBlogs)
  .post(Validation.createBlog, validateReq, Controller.createBlog);

router
  .use(Validation.idInParams, validateReq)
  .route("/blog/:id")
  .get(Controller.getBlogById)
  .put(Validation.updateBlogById, validateReq, Controller.updateBlogById)
  .delete(Controller.deleteBlogById);

module.exports = router;
