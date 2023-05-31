const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Adoption extends Model {}

Adoption.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Pets',
        key: 'id',
      },
    },
    requester_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    requester_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    request_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pending',
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Adoption',
    tableName: 'adoptions',
  }
);

module.exports = Adoption;
