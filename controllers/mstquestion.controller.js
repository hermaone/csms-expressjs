const MstQuestionService = require('../services/mstquestion.service');
const mstQuestionService = new MstQuestionService();

class MstQuestionController {
  static async getAllQuestionsPage(req, res) {
    const { page = 1, size = 10 } = req.query; // Default page = 1, size = 10
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(size, 10);

    try {
      const { totalItems, totalPages, items } = await mstQuestionService.getPagedQuestionsPage(pageNumber, pageSize);

      res.json({
        totalpage: totalPages,
        items,
        page: pageNumber,
        size: pageSize,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

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
      const question = await mstQuestionService.getQuestionById(id); // UUID tidak perlu diubah ke Number
      if (!question) {
        return res.status(404).send('Question not found');
      }
      res.json(question);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  static async createQuestion(req, res) {
    const { element, vquestiontext, ipoin } = req.body;
    try {
      const newQuestion = await mstQuestionService.createQuestion({
        element,
        vquestiontext,
        ipoin,
      });
      res.status(201).json(newQuestion);
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to create question');
    }
  }

  static async updateQuestion(req, res) {
    const { id } = req.params;
    const { element, vquestiontext, ipoin } = req.body;
    try {
      const updatedQuestion = await mstQuestionService.updateQuestion(id, {
        element,
        vquestiontext,
        ipoin,
      });
      if (!updatedQuestion) {
        return res.status(404).send('Question not found');
      }
      res.json(updatedQuestion);
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to update question');
    }
  }

  static async deleteQuestion(req, res) {
    const { id } = req.params;
    try {
      const deleted = await mstQuestionService.deleteQuestion(id);
      if (!deleted) {
        return res.status(404).send('Question not found');
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to delete question');
    }
  }
}

module.exports = MstQuestionController;