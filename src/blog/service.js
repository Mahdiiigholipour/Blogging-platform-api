const BlogModel = require("./model");
const buildBlogFilter = require("../utils/blogFilter");

exports.createBlog = async function (blogData) {
  const blog = await BlogModel.create({
    title: blogData.title,
    content: blogData.content,
    category: blogData.category,
    tags: blogData.tags,
  });

  return blog;
};

exports.getAllBlogs = async function (filterParams, pagination) {
  const filter = buildBlogFilter(filterParams);
  const blogs = BlogModel.find(filter)
    .skip(pagination.page * pagination.limit)
    .limit(pagination.limit)
    .exec()
    .catch((err) => {
      throw new Error("cant get blogs");
    });
  return blogs;
};

exports.getBlogById = async function (id) {
  const blog = await BlogModel.findById(id);
  return blog;
};

exports.updateBlogById = async function (id, newData) {
  const blog = await BlogModel.findByIdAndUpdate(id, newData, { new: true });
  return blog;
};

exports.deleteBlogById = async function (id) {
  const result = await BlogModel.findByIdAndDelete(id).catch((err) => {
    throw { status: 404, message: "blog not found" };
  });
  return result;
};
