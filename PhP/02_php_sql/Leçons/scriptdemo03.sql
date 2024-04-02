CREATE DATABASE IF NOT EXISTS demo03transaction CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE demo03transaction;

CREATE TABLE IF NOT EXISTS master (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS cat (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    breed VARCHAR(100) NOT NULL,
    master_id INT,
    CONSTRAINT fk_master_id FOREIGN KEY(master_id) REFERENCES master(id)
);
