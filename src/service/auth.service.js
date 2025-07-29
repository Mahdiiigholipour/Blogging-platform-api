const AuthModel = require("../model/auth.model");
const AdminModel = require("../model/admin.model");
const AppError = require("../common/utils/Error");
const TokenHelper = require("../common/utils/tokenHelper");

exports.register = async function (data) {
  if (AdminModel.isExist(data.email))
    throw new AppError("email already in use", 409);

  const admin = await AdminModel.create(data);

  const { accessToken, refreshToken } = TokenHelper.sign(admin);

  await AuthModel.create({
    admin: admin._id,
    accessToken,
    refreshToken,
  });

  return { admin, refreshToken, accessToken };
};
