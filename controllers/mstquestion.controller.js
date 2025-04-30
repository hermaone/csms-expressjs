const MstQuestionService = require('../services/mstquestion.service');
const mstQuestionService = new MstQuestionService();

class MstQuestionController {
  static async getAllQuestions(req, res) {
    try {
      const questions = await mstQuestionService.getAllQuestions();
      res.json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  static async getQuestionById(req, res) {
    const { id } = req.params;
    try {
      const question = await mstQuestionService.getQuestionById(Number(id));
      res.json(question);
    } catch (error) {
      console.error(error);
      res.status(404).send('Question not found');
    }
  }

  static async createQuestion(req, res) {
    const { question } = req.body;
    try {
      const newQuestion = await mstQuestionService.createQuestion(question);
      res.status(201).json(newQuestion);
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to create question');
    }
  }

  static async updateQuestion(req, res) {
    const { id } = req.params;
    const { question } = req.body;
    try {
      const updatedQuestion = await mstQuestionService.updateQuestion(Number(id), question);
      res.json(updatedQuestion);
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to update question');
    }
  }

  static async deleteQuestion(req, res) {
    const { id } = req.params;
    try {
      await mstQuestionService.deleteQuestion(Number(id));
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to delete question');
    }
  }
}

module.exports = MstQuestionController;