/**
 * Build a Mongo filter object for BlogModel.find()
 * @param {Object} params
 * @param {string} [params.title]     – substring to match in title (case-insensitive)
 * @param {string} [params.category]  – exact match on category
 * @param {string|string[]} [params.tags] – single tag or comma-separated list of tags
 * @returns {Object} mongoose filter
 */
function buildBlogFilter({ title, category, tags }) {
  const filter = {};

  if (title) filter.title = { $regex: title, $options: "i" };

  if (category) filter.category = category;

  if (tags) {
    // allow either array of tags or comma-separated string
    const tagArray = Array.isArray(tags)
      ? tags
      : tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);

    if (tagArray.length) {
      // any blog whose tags array contains at least one of these
      filter.tags = { $in: tagArray };
    }
  }

  return filter;
}

module.exports = buildBlogFilter;
