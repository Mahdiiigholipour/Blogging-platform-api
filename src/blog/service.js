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
