const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const AdminModel = model("admin", adminSchema);

module.exports = AdminModel;
