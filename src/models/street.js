'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Street extends Model {
    static associate(models) {
      Street.belongsTo(models.City, {
        foreignKey: 'city_id',
      });
      Street.hasMany(models.Profile, {
        foreignKey: 'street_id',
      });
    }
  }
  Street.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    number: DataTypes.INTEGER,
    complement: DataTypes.STRING,
    neigborhood: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    created_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Street',
    tableName: 'street',
    timestamps: true,
    paranoid: true,
    deletedAt: 'deleted_at',
    createdAt: 'created_at',
    updatedAt: false,
  });
  return Street;
};