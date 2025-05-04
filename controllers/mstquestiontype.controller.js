const { MstQuestType } = require('../models');

module.exports = {
  // Get all quest types
  async getAll(req, res) {
    try {
      const questTypes = await MstQuestType.findAll();
      res.status(200).json(questTypes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a single quest type by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const questType = await MstQuestType.findByPk(id);
      if (!questType) {
        return res.status(404).json({ message: 'Quest type not found' });
      }
      res.status(200).json(questType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new quest type
  async create(req, res) {
    try {
      const { vtype, dcreatedate, bstatus } = req.body;
      const newQuestType = await MstQuestType.create({
        vtype,
        dcreatedate,
        bstatus,
      });
      res.status(201).json(newQuestType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a quest type by ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const { vtype, dcreatedate, bstatus } = req.body;
      const questType = await MstQuestType.findByPk(id);
      if (!questType) {
        return res.status(404).json({ message: 'Quest type not found' });
      }
      await questType.update({ vtype, dcreatedate, bstatus });
      res.status(200).json(questType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a quest type by ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const questType = await MstQuestType.findByPk(id);
      if (!questType) {
        return res.status(404).json({ message: 'Quest type not found' });
      }
      await questType.destroy();
      res.status(200).json({ message: 'Quest type deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};