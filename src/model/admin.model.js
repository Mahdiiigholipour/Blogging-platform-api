const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const AppError = require("../common/utils/Error");
const adminSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const AdminModel = model("admin", adminSchema);

adminSchema.pre("save", async () => {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

adminSchema.methods.comparePassword = async function (hashedPassword) {
  return await bcrypt.compare(hashedPassword, this.password);
};

adminSchema.statics.isExist = async function (email) {
  try {
    const existing = await this.findOne({ email: email.toLowerCase() });
    return Boolean(existing);
  } catch (err) {
    throw new AppError(err.messsage, err.statusCode);
  }
};

module.exports = AdminModel;
