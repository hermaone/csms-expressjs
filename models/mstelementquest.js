'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MstElementQuest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here if needed
    }
  }
  MstElementQuest.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      vdescription: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      uqestiontypeid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      bstatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'MstElementQuest',
      tableName: 'mstelementquest',
      timestamps: true, // Adds createdAt and updatedAt fields
    }
  );
  return MstElementQuest;
};