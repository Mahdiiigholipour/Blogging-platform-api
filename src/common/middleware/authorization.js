const AdminModel = require("../../model/admin.model");
const AppError = require("../utils/Error");
const tokenHelper = require("../utils/tokenHelper");
async function AuthGuard(req, res, next) {
  try {
    const credential = req.headers?.authorization;
    if (!credential || !credential.startsWith("Bearer "))
      throw new AppError("authorization failed! login required.", 401);

    const accessToken = credential.split(" ")[1];

    const payload = await tokenHelper.verify(accessToken, "access");
    const admin = await AdminModel.findById(payload.id);

    if (!admin)
      throw new AppError("authorization failed! login required.", 401);

    req.admin = admin._id;

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = AuthGuard;
