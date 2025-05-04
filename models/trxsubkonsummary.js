'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TrxSubkonSummary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate(models) {
      // Define associations here
    }
  }
  TrxSubkonSummary.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Auto-generate UUID
        allowNull: false,
        primaryKey: true,
      },
      itotalpoin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vsubkonname: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      drequestdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      vstatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dcreateddate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Default to current timestamp
      },
      vcreatedby: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'TrxSubkonSummary',
      tableName: 'trxsubkonsummary',
      timestamps: false, // Disable automatic createdAt and updatedAt fields
    }
  );
  return TrxSubkonSummary;
};