const { MstElementQuest } = require('../models');

module.exports = {
  // Get all records
  async getAll(req, res) {
    try {
      const elements = await MstElementQuest.findAll();
      res.status(200).json(elements);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a single record by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const element = await MstElementQuest.findByPk(id);
      if (!element) {
        return res.status(404).json({ message: 'Element not found' });
      }
      res.status(200).json(element);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new record
  async create(req, res) {
    try {
      const { vdescription, uqestiontypeid, bstatus } = req.body;
      const newElement = await MstElementQuest.create({
        vdescription,
        uqestiontypeid,
        bstatus,
      });
      res.status(201).json(newElement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a record by ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const { vdescription, uqestiontypeid, bstatus } = req.body;
      const element = await MstElementQuest.findByPk(id);
      if (!element) {
        return res.status(404).json({ message: 'Element not found' });
      }
      await element.update({ vdescription, uqestiontypeid, bstatus });
      res.status(200).json(element);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a record by ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const element = await MstElementQuest.findByPk(id);
      if (!element) {
        return res.status(404).json({ message: 'Element not found' });
      }
      await element.destroy();
      res.status(200).json({ message: 'Element deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};