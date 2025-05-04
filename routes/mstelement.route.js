const express = require('express');
const router = express.Router();
const mstelementquestController = require('../controllers/mstelement.controller');

/**
 * @swagger
 * /mstelementquest/mstelementquest:
 *   get:
 *     summary: Get all mstelementquest records
 *     responses:
 *       200:
 *         description: A list of mstelementquest records
 */
router.get('/mstelementquest', mstelementquestController.getAll);

/**
 * @swagger
 * /mstelementquest/{id}:
 *   get:
 *     summary: Get a single mstelementquest record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the mstelementquest record
 *     responses:
 *       200:
 *         description: A single mstelementquest record
 *       404:
 *         description: Record not found
 */
router.get('/mstelementquest/:id', mstelementquestController.getById);

/**
 * @swagger
 * /mstelementquest/mstelementquest:
 *   post:
 *     summary: Create a new mstelementquest record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vdescription:
 *                 type: string
 *               uqestiontypeid:
 *                 type: string
 *               bstatus:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Record created successfully
 */
router.post('/mstelementquest', mstelementquestController.create);

/**
 * @swagger
 * /mstelementquest/{id}:
 *   put:
 *     summary: Update a mstelementquest record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the mstelementquest record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vdescription:
 *                 type: string
 *               uqestiontypeid:
 *                 type: string
 *               bstatus:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Record updated successfully
 */
router.put('/mstelementquest/:id', mstelementquestController.update);

/**
 * @swagger
 * /mstelementquest/{id}:
 *   delete:
 *     summary: Delete a mstelementquest record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the mstelementquest record
 *     responses:
 *       200:
 *         description: Record deleted successfully
 */
router.delete('/mstelementquest/:id', mstelementquestController.delete);

module.exports = router;