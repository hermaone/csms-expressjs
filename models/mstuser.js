'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MstUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate(models) {
      // Define associations here
      // Example: MstUser.belongsTo(models.Role, { foreignKey: 'UROLEID' });
    }
  }
  MstUser.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Auto-generate UUID
        allowNull: false,
        primaryKey: true,
      },
      UROLEID: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      vusername: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      vemail: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          isEmail: true, // Validasi email
        },
      },
      vpasswordhash: {
        type: DataTypes.TEXT, // Menggunakan TEXT untuk panjang maksimum
        allowNull: false,
      },
      bstatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Default status aktif
      },
      dcreatedate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Default ke waktu saat ini
      },
    },
    {
      sequelize,
      modelName: 'MstUser',
      tableName: 'mstuser',
      timestamps: false, // Tidak menggunakan createdAt dan updatedAt otomatis
    }
  );
  return MstUser;
};