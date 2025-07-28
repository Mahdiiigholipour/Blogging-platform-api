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

async function getAllBlogs(pagination) {
  BlogModel.find()
    .skip(pagination.page * pagination.limit)
    .limit(pagination.limit)
    .exec()
    .then((docs) => {
      return docs;
    })
    .catch((err) => {
      throw new Error("cant get blogs");
    });
}

async function getBlogById(id) {
  const blog = await BlogModel.findById(id);
  return blog;
}

async function updateBlogById(id, newData) {
  const blog = await BlogModel.findByIdAndUpdate(id, newData, { new: true });
  return blog;
}

async function deleteBlogById(id) {
  const result = await BlogModel.findByIdAndDelete(id).catch((err) => {
    throw { status: 404, message: "blog not found" };
  });
  return result;
}

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  updateBlogById,
};
