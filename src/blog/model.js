const { Schema, Types, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

const BlogModel = model("blog", blogSchema);

module.exports = BlogModel;
