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
