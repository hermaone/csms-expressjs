// filepath: /Users/mbp/Documents/Work/CSMS/be/csms-expressjs/migrations/YYYYMMDDHHMMSS-create-mstuser.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mstuser', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      UROLEID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      vusername: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      vemail: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      vpasswordhash: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      bstatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      dcreatedate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mstuser');
  },
};