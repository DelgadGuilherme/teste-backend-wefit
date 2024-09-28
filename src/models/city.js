'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.State, {
        foreignKey: 'state_id',
      });
      City.hasMany(models.Street, {
        foreignKey: 'city_id',
      });
    }
  }
  City.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    created_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'City',
    tableName: 'city',
    timestamps: true,
    paranoid: true,
    deletedAt: 'deleted_at',
    createdAt: 'created_at',
    updatedAt: false,
  });
  return City;
};