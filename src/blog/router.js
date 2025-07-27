const router = require("express").Router();
const Controller = require("./controller");

router.route("/blog").get(Controller.getAllBlogs).post(Controller.createBlog);

router
  .route("/blog/:id")
  .get(Controller.getBlogById)
  .put(Controller.updateBlogById)
  .delete(Controller.deleteBlogById);

module.exports = router;
