'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LastName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      FirstName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      Email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      Password:{
        type: Sequelize.STRING,
        allowNull:false
      },
      UserName: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      isActive: {
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
    await queryInterface.dropTable('users');
  }
};