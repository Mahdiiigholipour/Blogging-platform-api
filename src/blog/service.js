const BlogModel = require("./model");

async function createBlog(blogData) {
  const blog = await BlogModel.create({
    title: blogData.title,
    content: blogData.content,
    category: blogData.category,
    tags: blogData.tags,
  });

  return blog;
}

async function getAllBlogs() {
  const blogs = await BlogModel.find();
  return blogs;
}

async function getBlogById(id) {
  const blog = await BlogModel.findById(id);
  return blog;
}

async function deleteBlogById(id) {
  const result = await BlogModel.findByIdAndDelete(id).catch((err) => {
    throw { status: 404, message: "blog not found" };
  });
  return result;
}
