const router = require("express").Router();
const AuthController = require("../controller/auth.controller");
const AdminValidation = require("../validation/admin.validation");
const validateReq = require("../common/middleware/validateRequest");

router.post(
  "/register",
  AdminValidation.register,
  validateReq,
  AuthController.register
);
router.post("/login", AdminValidation.login, validateReq, AuthController.login);

// router.post(
//   "/refresh_token",
//   AdminValidation.refreshToken,
//   validateReq,
//   AuthController.refreshToken
// );

module.exports = { AuthRoutes: router };
