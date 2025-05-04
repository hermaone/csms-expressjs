'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TrxSubkon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate(models) {
      // Define associations here
      // Example: TrxSubkon.belongsTo(models.SomeModel, { foreignKey: 'uquestionid' });
    }
  }
  TrxSubkon.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      ufilesubkonid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      uquestionid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bresponse: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      ipoin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      ipoinactual: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      vactual: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bresponseactual: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      breview: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      vreviewby: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bvalidasi: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      validasiby: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bapproval: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      vapprovalby: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vsertifikat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dreviewdate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      dvalidasidate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      dapprovaldate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      uidsubkonsummary: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      uuserid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'TrxSubkon',
      tableName: 'trxsubkon',
      timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
  );
  return TrxSubkon;
};