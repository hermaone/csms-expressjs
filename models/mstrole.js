'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MstRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate(models) {
      // Define associations here
      // Example: MstRole.hasMany(models.MstUser, { foreignKey: 'UROLEID' });
    }
  }
  MstRole.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Auto-generate UUID
        allowNull: false,
        primaryKey: true,
      },
      vrolename: {
        type: DataTypes.STRING(100),
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
      modelName: 'MstRole',
      tableName: 'mstrole',
      timestamps: false, // Tidak menggunakan createdAt dan updatedAt otomatis
    }
  );
  return MstRole;
};