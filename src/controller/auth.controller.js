const AuthService = require("../service/auth.service.js");
exports.register = async function (req, res, next) {
  try {
    const { name, email, password } = req.body;
    const result = await AuthService.register({ name, email, password });
  } catch (err) {
    next(err);
  }
};

exports.login = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login({ email, password });
  } catch (err) {
    next(err);
  }
};
