const router = require("express").Router();
const Controller = require("./controller");

router.route("/blog").get(Controller.getAllBlogs).post(Controller.createBlog);
