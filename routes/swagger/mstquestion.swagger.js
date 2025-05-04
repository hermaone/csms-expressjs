/**
 * @swagger
 * tags:
 *   name: MstQuestions
 *   description: API for managing questions
 */

/**
 * @swagger
 * /mstquestions:
 *   get:
 *     summary: Get all questions
 *     tags: [MstQuestions]
 *     responses:
 *       200:
 *         description: A list of questions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                   element:
 *                     type: string
 *                     format: uuid
 *                   vquestiontext:
 *                     type: string
 *                   ipoin:
 *                     type: integer
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */

/**
 * @swagger
 * /mstquestions/{id}:
 *   get:
 *     summary: Get a question by ID
 *     tags: [MstQuestions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ID of the question
 *     responses:
 *       200:
 *         description: A single question
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                 element:
 *                   type: string
 *                   format: uuid
 *                 vquestiontext:
 *                   type: string
 *                 ipoin:
 *                   type: integer
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Question not found
 */

/**
 * @swagger
 * /mstquestions:
 *   post:
 *     summary: Create a new question
 *     tags: [MstQuestions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               element:
 *                 type: string
 *                 format: uuid
 *               vquestiontext:
 *                 type: string
 *               ipoin:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Question created successfully
 */

/**
 * @swagger
 * /mstquestions/{id}:
 *   put:
 *     summary: Update a question by ID
 *     tags: [MstQuestions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ID of the question
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               element:
 *                 type: string
 *                 format: uuid
 *               vquestiontext:
 *                 type: string
 *               ipoin:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Question updated successfully
 *       404:
 *         description: Question not found
 */

/**
 * @swagger
 * /mstquestions/{id}:
 *   delete:
 *     summary: Delete a question by ID
 *     tags: [MstQuestions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ID of the question
 *     responses:
 *       204:
 *         description: Question deleted successfully
 *       404:
 *         description: Question not found
 */