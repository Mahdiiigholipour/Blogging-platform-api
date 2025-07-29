const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SEC, REFRESH_TOKEKN_SEC } = require("../config");
exports.sign = async function (admin) {
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
