const Service = require("./service");

async function createBlog(req, res, next) {
  try {
    const { title, content, category, tags } = req.body;
    const blog = await Service.createBlog({ title, content, category, tags });

    res.status(201).json({ message: "blog created successfully.", blog });
  } catch (err) {
    next(err);
  }
}

async function getAllBlogs(req, res, next) {
  try {
    const blogs = await Service.getAllBlogs();
    res.status(200).json({ message: "blogs list", blogs });
  } catch (err) {
    next(err);
  }
}

async function getOneBlogs(req, res, next) {
  try {
    const blog = await Service.getBlogById(req.params?.id);
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
}

async function updateBlogById(req, res, next) {
  try {
    const { title, content, category, tags } = req.body;
    const updatedBlog = await Service.updateBlogById(req.params?.id, {
      title,
      content,
      category,
      tags,
    });

    res
      .status(200)
      .json({ message: "blog updated successfully.", blog: updatedBlog });
  } catch (err) {
    next(err);
  }
}
