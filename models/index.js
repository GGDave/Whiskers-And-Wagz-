const Pet = require('./pet');
const User = require('./user');
const Adoption = require('./Adoption');

// Define associations between models if needed
Pet.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Pet, { foreignKey: 'user_id' });

Adoption.belongsTo(Pet, { foreignKey: 'pet_id' });
Pet.hasMany(Adoption, { foreignKey: 'pet_id' });

module.exports = {
  Pet,
  User,
  Adoption,
};

