const db = require('../db'); // Pastikan file db.js sudah dikonfigurasi dengan koneksi database

class MstQuestionService {
  // Get all questions
  async getAllQuestions() {
    try {
      const result = await db.query('SELECT * FROM mst_questions');
      return result.rows;
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw new Error('Failed to fetch questions');
    }
  }

  // Get a question by ID
  async getQuestionById(id) {
    try {
      const result = await db.query('SELECT * FROM mst_questions WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        throw new Error('Question not found');
      }
      return result.rows[0];
    } catch (error) {
      console.error(`Error fetching question with ID ${id}:`, error);
      throw new Error('Failed to fetch question');
    }
  }

  // Create a new question
  async createQuestion(question) {
    try {
      const result = await db.query(
        'INSERT INTO mst_questions (question) VALUES ($1) RETURNING *',
        [question]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Error creating question:', error);
      throw new Error('Failed to create question');
    }
  }

  // Update a question
  async updateQuestion(id, question) {
    try {
      const result = await db.query(
        'UPDATE mst_questions SET question = $1 WHERE id = $2 RETURNING *',
        [question, id]
      );
      if (result.rows.length === 0) {
        throw new Error('Question not found');
      }
      return result.rows[0];
    } catch (error) {
      console.error(`Error updating question with ID ${id}:`, error);
      throw new Error('Failed to update question');
    }
  }

  // Delete a question
  async deleteQuestion(id) {
    try {
      const result = await db.query('DELETE FROM mst_questions WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        throw new Error('Question not found');
      }
      return result.rows[0];
    } catch (error) {
      console.error(`Error deleting question with ID ${id}:`, error);
      throw new Error('Failed to delete question');
    }
  }
}

module.exports = MstQuestionService;