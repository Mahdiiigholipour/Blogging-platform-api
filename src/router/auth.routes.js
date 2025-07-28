const router = require("express").Router();
const AuthController = require("../controller/auth.controller");
const AuthValidation = require("../validation/auth.validation");
const validateReq = require("../common/middleware/validateRequest");

router.post(
  "/register",
  AuthValidation.register,
  validateReq,
  AuthController.register
);
router.post("/login", AuthValidation.login, validateReq, AuthController.login);

router.post(
  "/refresh_token",
  AuthValidation.refreshToken,
  validateReq,
  AuthController.refreshToken
);

module.exports = { AuthRoutes: router };
