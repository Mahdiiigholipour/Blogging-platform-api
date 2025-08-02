const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SEC, REFRESH_TOKEKN_SEC } = require("../config");
const AppError = require("./Error");
exports.sign = function (admin) {
  const accessToken = jwt.sign(
    { id: admin._id, email: admin.email },
    ACCESS_TOKEN_SEC,
    { expiresIn: "1h" }
  );

  const refreshToken = jwt.sign(
    { id: admin._id, email: admin.email },
    REFRESH_TOKEKN_SEC,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

exports.verify = async function (token, type = "access") {
  if (!["access", "refresh"].includes(type.toLowerCase()))
    throw new AppError("invalid type: 'access' or 'refresh'");

  const isValid = jwt.verify(
    token,
    token === "access" ? ACCESS_TOKEN_SEC : REFRESH_TOKEKN_SEC
  );

  if (!isValid) throw new AppError("authorization failed! login required.", 401);

  return isValid;
};
