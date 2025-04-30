'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MstQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MstQuestion.init({
    question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MstQuestion',
  });
  return MstQuestion;
};