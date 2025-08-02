const AuthService = require("../service/auth.service.js");
exports.register = async function (req, res, next) {
  try {
    const { name, email, password } = req.body;
    const result = await AuthService.register({ name, email, password });
    res.status(201).json({
      message: "registered new admin successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login({ email, password });
    res.status(200).json({ message: "logged in successfully!", data: result });
  } catch (err) {
    next(err);
  }
};
