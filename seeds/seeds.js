const { Types, Breeds, Users, Pets, AdoptionRequests } = require('../models');
const sequelize = require('../config/connection');
const typesData = require('./typesData.json');
const breedsData = require('./breedsData.json');
const usersData = require('./usersData.json');
const petsData = require('./petsData.json');
const adoptionRequestsData = require('./adoptionRequestsData.json');

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); // Drops existing tables and recreates them

    // Seed the Types table
    await Types.bulkCreate(typesData, {
      individualHooks: true,
      returning: true,
    });

    // Seed the Breeds table
    await Breeds.bulkCreate(breedsData, {
      individualHooks: true,
      returning: true,
    });

    // Seed the Users table
    await Users.bulkCreate(usersData, {
      individualHooks: true,
      returning: true,
    });

    // Seed the Pets table
    await Pets.bulkCreate(petsData, {
      individualHooks: true,
      returning: true,
    });

    // Seed the AdoptionRequests table
    await AdoptionRequests.bulkCreate(adoptionRequestsData, {
      individualHooks: true,
      returning: true,
    });

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    sequelize.close(); // Close the database connection
  }

  process.exit(0);
}

seedDatabase();