require("dotenv").config();
module.exports = {
  PORT: process.env.PORT ?? 3000,
  MONGO_URL: process.env.MONGODB_URL,
  ACCESS_TOKEN_SEC: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEKN_SEC: process.env.REFRESH_TOKEKN_SECRET,
};
