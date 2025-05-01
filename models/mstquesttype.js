'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MstQuestType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here if needed
    }
  }
  MstQuestType.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      vtype: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      dcreatedate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      bstatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'MstQuestType',
      tableName: 'mstquesttype',
      timestamps: false, // Disables createdAt and updatedAt fields
    }
  );
  return MstQuestType;
};