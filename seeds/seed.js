const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const { Pets, Breeds, AdoptionRequests } = require('../models'); // Import your Sequelize models

// Define the data for the pets
const petsData = [
  {
    id: 1,
    name: 'Fluffy',
    age: 2,
    gender: 'Female',
    breed_id: 1,
    availability: true
  },
  {
    id: 2,
    name: 'Buddy',
    age: 4,
    gender: 'Male',
    breed_id: 2,
    availability: true
  },
  // Add more pet data as needed
];

// Define the data for the breeds
const breedsData = [
  {
    id: 1,
    name: 'Labrador Retriever',
    species: 'Dog'
  },
  {
    id: 2,
    name: 'Siamese',
    species: 'Cat'
  },
  // Add more breed data as needed
];

// Define the data for the adoption requests
const adoptionRequestsData = [
  {
    id: 1,
    pet_id: 1,
    requester_name: 'John Doe',
    requester_email: 'johndoe@example.com',
    request_date: new Date(),
    status: 'Pending'
  },
  {
    id: 2,
    pet_id: 2,
    requester_name: 'Jane Smith',
    requester_email: 'janesmith@example.com',
    request_date: new Date(),
    status: 'Approved'
  },
  // Add more adoption request data as needed
];

// Function to seed the database
async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); // Drops existing tables and recreates them

    await Breeds.bulkCreate(breedsData); // Seed the Breeds table

    await Pets.bulkCreate(petsData); // Seed the Pets table

    await AdoptionRequests.bulkCreate(adoptionRequestsData); // Seed the AdoptionRequests table

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    sequelize.close(); // Close the database connection
  }
  process.exit(0);
}

// Call the seedDatabase function to start the seeding process

seedDatabase();
