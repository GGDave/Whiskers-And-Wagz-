DROP DATABASE IF EXISTS wagz_db;
CREATE DATABASE wagz_db;

CREATE TABLE Pets (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT,
  gender VARCHAR(10),
  breed_id INT,
  availability BOOLEAN,
  FOREIGN KEY (breed_id) REFERENCES Breeds(id)
);

CREATE TABLE Breeds (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  species VARCHAR(50) NOT NULL
);

CREATE TABLE AdoptionRequests (
  id INT PRIMARY KEY,
  pet_id INT,
  requester_name VARCHAR(50) NOT NULL,
  requester_email VARCHAR(100) NOT NULL,
  request_date DATE,
  status VARCHAR(20),
  FOREIGN KEY (pet_id) REFERENCES Pets(id)
);
