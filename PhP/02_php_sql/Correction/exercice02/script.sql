CREATE DATABASE IF NOT EXISTS exercice02commandes CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE exercice02commandes;

CREATE TABLE IF NOT EXISTS `customer` (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    zip_code VARCHAR(5) NOT NULL,
    city VARCHAR(100) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    CONSTRAINT chk_phone CHECK(LENGTH(phone) = 10)
);

CREATE TABLE IF NOT EXISTS `order` (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at DATETIME NOT NULL DEFAULT NOW(),
    amount DECIMAL(10, 2) NOT NULL,
    customer_id INT NOT NULL,
    CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customer(id)
);