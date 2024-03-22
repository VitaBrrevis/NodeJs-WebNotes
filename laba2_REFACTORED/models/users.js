'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      login: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true 
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: true 
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true 
      }}, {
    sequelize,
    timestamps: false,
    modelName: 'Users',
  });
  return Users;
};