'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MstQuestion extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  MstQuestion.init(
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'MstQuestion',
    }
  );
  return MstQuestion;
};