'use strict';
// const { Model} = require('sequelize');
import {Model} from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class messageRecipients extends Model {
    // static init(arg0: { recipientId: any; recipientGroupId: any; messageId: any; isRead: any; }, arg1: { sequelize: any; modelName: string; }) {
    //   throw new Error("Method not implemented.");
    // }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }; 
  messageRecipients.init({
    recipientId: DataTypes.INTEGER,
    recipientGroupId: DataTypes.INTEGER,
    messageId: DataTypes.INTEGER,
    isRead: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'messageRecipients',
  });
  return messageRecipients;
};