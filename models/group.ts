'use strict';

import { Model } from "sequelize/types";

const {
  sequelize,DataTypes
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize: any, DataTypes: any) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      group.hasMany(user);
    }
  };
  group.init({
    Name: DataTypes.STRING,
    is_Active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'group',
  });
  return group;
};