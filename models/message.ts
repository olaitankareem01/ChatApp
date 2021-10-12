'use strict';

import {Model} from "sequelize";


const user = require('./user');
module.exports = (sequelize: any, DataTypes: any) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Message.belongsToMany(user,{through:'messagerecipient'});
    }
  };
  Message.init({
    senderId:  DataTypes.INTEGER,
    recipientId:DataTypes.INTEGER,
    Content: {
      type:DataTypes.STRING,
      allowNull:false
    },
    parentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};