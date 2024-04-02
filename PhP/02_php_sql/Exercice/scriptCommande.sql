CREATE DATABASE IF NOT EXISTS exo02_commande CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE exo02_commande;

CREATE TABLE IF NOT EXISTS client (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    code_postal VARCHAR(5) NOT NULL,
    city VARCHAR(30) NOT NULL,
    phone_number VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS commandes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    date DATETIME,
    client_id INT,
    CONSTRAINT fk_master_id FOREIGN KEY(client_id) REFERENCES client(id)
);
