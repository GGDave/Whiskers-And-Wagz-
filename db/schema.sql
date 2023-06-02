DROP DATABASE IF EXISTS wagz_db;
CREATE DATABASE wagz_db;

USE wagz_db;


CREATE TABLE Types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type_name VARCHAR(255) NOT NULL
);


CREATE TABLE Breeds (
    id INT AUTO_INCREMENT PRIMARY KEY,
    breed_name VARCHAR(255) NOT NULL,
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES Types(id)
    

);


CREATE TABLE Pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type_id INT,
    breed_id INT,
    gender ENUM('Male', 'Female'),
    age INT,
    description TEXT,
    is_adopted BOOLEAN DEFAULT 0,
    FOREIGN KEY (type_id) REFERENCES Types(id),
    FOREIGN KEY (breed_id) REFERENCES Breeds(id)
);

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15)
);

CREATE TABLE AdoptionRequests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pet_id INT,
    user_id INT,
    request_date DATE,
    status ENUM('Pending', 'Approved', 'Rejected'),
    FOREIGN KEY (pet_id) REFERENCES Pets(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);


