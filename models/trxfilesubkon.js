'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TrxFileSubkon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate(models) {
      // Define associations here
      // Example: TrxFileSubkon.belongsTo(models.SomeModel, { foreignKey: 'uasmtresid' });
    }
  }
  TrxFileSubkon.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Auto-generate UUID
        allowNull: false,
        primaryKey: true,
      },
      uasmtresid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      vfilepath: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      vfileattachment: {
        type: DataTypes.TEXT, // Menggunakan TEXT untuk menyimpan data Base64
        allowNull: false,
      },
      bstatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Default status aktif
      },
    },
    {
      sequelize,
      modelName: 'TrxFileSubkon',
      tableName: 'trxfilesubkon',
      timestamps: false, // Tidak menggunakan createdAt dan updatedAt otomatis
    }
  );
  return TrxFileSubkon;
};