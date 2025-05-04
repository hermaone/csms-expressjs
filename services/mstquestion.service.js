const db = require('../db'); // Pastikan file db.js sudah dikonfigurasi dengan koneksi database

class MstQuestionService {

  async getPagedQuestionsPage(page, size) {
    const offset = (page - 1) * size; // Hitung offset berdasarkan page dan size
    const limit = size;

    try {
      // Hitung total jumlah data
      const totalResult = await db.query('SELECT COUNT(*) AS total FROM mstquestions');
      const totalItems = parseInt(totalResult.rows[0].total, 10);

      // Ambil data dengan limit dan offset
      const result = await db.query(
        'SELECT * FROM mstquestions ORDER BY "createdAt" DESC LIMIT $1 OFFSET $2',
        [limit, offset]
      );

      const items = result.rows;
      const totalPages = Math.ceil(totalItems / size); // Hitung total halaman

      return { totalItems, totalPages, items };
    } catch (error) {
      console.error('Error fetching paged questions:', error);
      throw new Error('Failed to fetch paged questions');
    }
  }

  // Get all questions
  async getAllQuestions() {
    try {
      const result = await db.query('SELECT * FROM mstquestions');
      return result.rows;
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw new Error('Failed to fetch questions');
    }
  }

  // Get a question by ID
  async getQuestionById(id) {
    try {
      const result = await db.query('SELECT * FROM mstquestions WHERE id = $1', [id]);
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
  async createQuestion({ element, vquestiontext, ipoin }) {
    try {
      const result = await db.query(
        'INSERT INTO mstquestions (element, vquestiontext, ipoin) VALUES ($1, $2, $3) RETURNING *',
        [element, vquestiontext, ipoin]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Error creating question:', error);
      throw new Error('Failed to create question');
    }
  }

  // Update a question
  async updateQuestion(id, { element, vquestiontext, ipoin }) {
    try {
      const result = await db.query(
        'UPDATE mstquestions SET element = $1, vquestiontext = $2, ipoin = $3 WHERE id = $4 RETURNING *',
        [element, vquestiontext, ipoin, id]
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
      const result = await db.query('DELETE FROM mstquestions WHERE id = $1 RETURNING *', [id]);
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