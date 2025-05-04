const express = require('express');
const router = express.Router();
const mstquesttypeController = require('../controllers/mstquestiontype.controller');

router.get('/mstquesttype', mstquesttypeController.getAll);
router.get('/mstquesttype/:id', mstquesttypeController.getById);
router.post('/mstquesttype', mstquesttypeController.create);
router.put('/mstquesttype/:id', mstquesttypeController.update);
router.delete('/mstquesttype/:id', mstquesttypeController.delete);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: MstQuestType
 *   description: API for managing quest types
 */

/**
 * @swagger
 * /mstquesttype:
 *   get:
 *     summary: Get all quest types
 *     tags: [MstQuestType]
 *     responses:
 *       200:
 *         description: A list of quest types
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
 *                   vtype:
 *                     type: string
 *                   dcreatedate:
 *                     type: string
 *                     format: date-time
 *                   bstatus:
 *                     type: boolean
 */

/**
 * @swagger
 * /mstquesttype/{id}:
 *   get:
 *     summary: Get a quest type by ID
 *     tags: [MstQuestType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ID of the quest type
 *     responses:
 *       200:
 *         description: A single quest type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                 vtype:
 *                   type: string
 *                 dcreatedate:
 *                   type: string
 *                   format: date-time
 *                 bstatus:
 *                   type: boolean
 *       404:
 *         description: Quest type not found
 */

/**
 * @swagger
 * /mstquesttype:
 *   post:
 *     summary: Create a new quest type
 *     tags: [MstQuestType]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vtype:
 *                 type: string
 *               dcreatedate:
 *                 type: string
 *                 format: date-time
 *               bstatus:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Quest type created successfully
 */

/**
 * @swagger
 * /mstquesttype/{id}:
 *   put:
 *     summary: Update a quest type by ID
 *     tags: [MstQuestType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ID of the quest type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vtype:
 *                 type: string
 *               dcreatedate:
 *                 type: string
 *                 format: date-time
 *               bstatus:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Quest type updated successfully
 *       404:
 *         description: Quest type not found
 */

/**
 * @swagger
 * /mstquesttype/{id}:
 *   delete:
 *     summary: Delete a quest type by ID
 *     tags: [MstQuestType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ID of the quest type
 *     responses:
 *       200:
 *         description: Quest type deleted successfully
 *       404:
 *         description: Quest type not found
 */