const express = require('express');
const router = express.Router();
const mstelementquestController = require('../controllers/mstelement.controller');

router.get('/mstelementquest', mstelementquestController.getAll);
router.get('/mstelementquest/:id', mstelementquestController.getById);
router.post('/mstelementquest', mstelementquestController.create);
router.put('/mstelementquest/:id', mstelementquestController.update);
router.delete('/mstelementquest/:id', mstelementquestController.delete);

module.exports = router;