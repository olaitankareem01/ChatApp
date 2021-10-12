'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('messageRecipients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipientId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Users',
          key: 'id',
          onDelete:'restrict',
        onUpdate:'restrict'
        }
      },
      recipientGroupId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Groups',
          key: 'id',
          onDelete:'restrict',
          onUpdate:'restrict'
        }
      },
      messageId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Messages',
          key: 'id',
          onDelete:'restrict',
          onUpdate:'restrict'
        }
      },
      isRead: {
        type: Sequelize.BOOLEAN,
        default:0,
        allowNull:false
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
    await queryInterface.dropTable('messageRecipients');
  }
};