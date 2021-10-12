'use strict';
import {Model} from "sequelize";

module.exports = (sequelize: any, DataTypes:any) => {
  class usergroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  };
  usergroup.init({
    userId:DataTypes.INTEGER,
    groupId:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'usergroup',
  });
  return usergroup;
};