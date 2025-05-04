'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class mstquestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mstquestions.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Auto-generate UUID
        allowNull: false,
        primaryKey: true,
      },
      element: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      vquestiontext: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      ipoin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bstatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Default value for bstatus
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Auto-generate current timestamp
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Auto-generate current timestamp
      },
    },
    {
      sequelize,
      modelName: 'mstquestions',
      tableName: 'mstquestions',
      timestamps: true, // Automatically manage createdAt and updatedAt
    }
  );
  return mstquestions;
};