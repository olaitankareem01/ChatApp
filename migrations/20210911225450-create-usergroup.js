'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usergroups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'Users',
          key: 'id',
          onDelete:'restrict',
          onUpdate:'restrict'
        }
      },
      groupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'Groups',
          key: 'id',
          onDelete:'restrict',
          onUpdate:'restrict'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usergroups');
  }
};