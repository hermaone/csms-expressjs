// filepath: /Users/mbp/Documents/Work/CSMS/be/csms-expressjs/migrations/YYYYMMDDHHMMSS-create-mstrole.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mstrole', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      vrolename: {
        type: Sequelize.STRING(100),
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
    await queryInterface.dropTable('mstrole');
  },
};