/**
 * @swagger
 * tags:
 *   - name: Admin
 *     description: Admin-only blog management

 * /admin/blog/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get a blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog found
 *       404:
 *         description: Blog not found

 *   put:
 *     tags: [Admin]
 *     summary: Update a blog post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
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
 *                 type: string
 *     responses:
 *       200:
 *         description: Blog updated
 *       400:
 *         description: Validation error

 *   delete:
 *     tags: [Admin]
 *     summary: Delete a blog post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Deleted successfully
 *       404:
 *         description: Blog not found
 */
