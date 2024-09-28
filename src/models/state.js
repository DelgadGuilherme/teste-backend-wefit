'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static associate(models) {
      State.hasMany(models.City, {
        foreignKey: 'state_id',
      });
    }
  }
  State.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    created_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'State',
    tableName: 'state',
    timestamps: true,
    paranoid: true,
    deletedAt: 'deleted_at',
    createdAt: 'created_at',
    updatedAt: false,
  });
  return State;
};