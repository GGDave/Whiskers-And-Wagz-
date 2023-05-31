const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Breeds extends Model {}

Breeds.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    breed_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Unknown Breed',
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'types',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'breeds',
  }
);

module.exports = Breeds;