const { Schema, Types, model } = require("mongoose");

const authSchema = new Schema(
  {
    admin: { type: Types.ObjectId, required: true, ref: "admin" },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
  },
  { timestamps: true }
);

const AuthModel = model("auth", authSchema);

module.exports = AuthModel;
