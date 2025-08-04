/**
 * @swagger
 * tags:
 *   - name: Blog
 *     description: Public blog access

 * /blog:
 *   get:
 *     tags: [Blog]
 *     summary: Get all blogs
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Search by blog title
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Search by blog category
 *       - in: query
 *         name: tags
 *         schema:
 *           type: string
 *         description: Search by tags (note) comma-spread array
 *     responses:
 *       200:
 *         description: List of blogs

 *   post:
 *     tags: [Blog]
 *     summary: Create a new blog post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Blog created successfully
 *       400:
 *         description: Validation error
 */
