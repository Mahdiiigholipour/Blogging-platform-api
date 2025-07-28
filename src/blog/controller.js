const Service = require("./service");

exports.createBlog = async function (req, res, next) {
  try {
    const { title, content, category, tags } = req.body;
    const blog = await Service.createBlog({ title, content, category, tags });

    res.status(201).json({ message: "blog created successfully.", blog });
  } catch (err) {
    next(err);
  }
};

exports.getAllBlogs = async function (req, res, next) {
  try {
    const page = parseInt(req.query?.page, 10) || 0;
    const limit = parseInt(req.query?.limit, 10) || 0;

    const { title, category, tags } = req.query;

    const blogs = await Service.getAllBlogs(
      { title, category, tags },
      { page, limit }
    );
    res.status(200).json({ message: "blogs list", blogs });
  } catch (err) {
    next(err);
  }
};

exports.getBlogById = async function (req, res, next) {
  try {
    const blog = await Service.getBlogById(req.params?.id);
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};

exports.updateBlogById = async function (req, res, next) {
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
};

exports.deleteBlogById = async function (req, res, next) {
  try {
    await Service.deleteBlogById(req.params?.id);
    res.status(200).json({ message: "blog deleted successfully." });
  } catch (err) {
    next(err);
  }
};
