'use strict';
const { group } = require('../models/group');

import {Model} from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      user.belongsToMany(group,{through:'usergroup'});
 
    }
  };
  user.init({
    LastName: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    UserName: DataTypes.STRING,
    Email:DataTypes.STRING,
    Password:DataTypes.STRING,
    is_Active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};