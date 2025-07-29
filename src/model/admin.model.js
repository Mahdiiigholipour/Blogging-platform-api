const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
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

module.exports = AdminModel;
