const MainRouter = require("express").Router();
const { AdminRoutes } = require("./admin.routes");

MainRouter.use("/admin", AdminRoutes);
MainRouter.use("/blog", AdminRoutes);

module.exports = MainRouter;
