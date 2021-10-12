'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      senderId: {
        type: Sequelize.INTEGER, 
       references:{
          model: 'Users',
          key: 'id',
          onDelete:'restrict',
          onUpdate:'restrict'
        }
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
      Content: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      parentId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Messages',
          key: 'id',
          onDelete:'restrict',
          onUpdate:'restrict'
        }
      },
      isActive:{
        type:Sequelize.BOOLEAN,
        default:1,
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
    await queryInterface.dropTable('Messages');
  }
};