
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Types = require('./Types');
const Breeds = require('./Breeds');
const Users = require('./Users');
const Pets = require('./Pets');
const AdoptionRequests = require('./AdoptionRequests');

// Define the relationships between the models
Breeds.hasMany(Types, {
  foreignKey: 'type_id',
  onDelete: 'CASCADE'
});

Pets.belongsTo(Types, {
  foreignKey: 'type_id',
});

Pets.hasMany(Breeds, {
  foreignKey: 'breed_id',
});

AdoptionRequests.hasMany(Pets, {
  foreignKey: 'pet_id',
});

AdoptionRequests.belongsTo(Users, {
  foreignKey: 'user_id',
});

module.exports = { Types, Breeds, Users, Pets, AdoptionRequests };

