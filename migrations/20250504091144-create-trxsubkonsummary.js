// filepath: /Users/mbp/Documents/Work/CSMS/be/csms-expressjs/migrations/YYYYMMDDHHMMSS-create-trxfilesubkon.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trxfilesubkon', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      uasmtresid: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      vfilepath: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      vfileattachment: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      bstatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('trxfilesubkon');
  },
};