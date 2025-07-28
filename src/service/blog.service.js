const BlogModel = require("../model/blog.model");
const buildBlogFilter = require("../utils/blogFilter");
const AppError = require("../utils/Error");

exports.createBlog = async function (blogData) {
  const blog = await BlogModel.create(blogData);
  return blog;
};

exports.getAllBlogs = async function (filterParams, pagination) {
  const filter = buildBlogFilter(filterParams);
  const blogs = BlogModel.find(filter)
    .skip(pagination.page * pagination.limit)
    .limit(pagination.limit)
    .exec();
  return blogs;
};

exports.getBlogById = async function (id) {
  const blog = await BlogModel.findById(id);
  if (!blog) throw new AppError("not found any blog!", 404);
  return blog;
};

exports.updateBlogById = async function (id, newData) {
  const blog = await BlogModel.findByIdAndUpdate(id, newData, { new: true });
  if (!blog) throw new AppError("not found any blog to update!", 404);
  return blog;
};

exports.deleteBlogById = async function (id) {
  const deleted = await BlogModel.findByIdAndDelete(id);
  if (!deleted) throw new AppError("not found any blog to delete!", 404);

  return deleted;
};
