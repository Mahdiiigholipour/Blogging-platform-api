const MainRouter = require("express").Router();
const { AdminRoutes } = require("./admin.routes");
const { AuthRoutes } = require("./auth.routes");
const { BlogRoutes } = require("./blog.routes");

MainRouter.use("/auth", AuthRoutes);
MainRouter.use("/admin", AdminRoutes);
MainRouter.use("/blog", BlogRoutes);

module.exports = MainRouter;
