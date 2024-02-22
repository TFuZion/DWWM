-- DML : DATA MANIPULATION LANGUAGE

CREATE DATABASE IF NOT EXISTS demo02
	CHARACTER SET utf8mb4
	COLLATE UTF8MB4_GENERAL_CI;

SHOW DATABASES;

USE demo02;
	
CREATE TABLE IF NOT EXISTS joueur (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	pseudo VARCHAR(50) NOT NULL,
	email VARCHAR(255) NOT NULL,
	date_creation DATETIME NOT NULL DEFAULT NOW(),
	date_derniere_connexion DATETIME,
	is_admin TINYINT(1) DEFAULT 0 NOT NULL
);

SHOW TABLES;

-- INSERT INTO : C de CRUD

INSERT INTO
	joueur
	(pseudo, email)
VALUES
	('darkSasuke', 'dark@sasuke.konoha');

SELECT * FROM joueur;

INSERT INTO
	joueur
	(pseudo, email, date_creation, date_derniere_connexion, is_admin)
VALUES
	('darkSakura', 'dark@sakura.konoha', '2020-01-01 12:00:00', NOW(), 1),
	('darkGaara', 'dark@gaara.suuna', '2021-02-01 12:00:00', NOW(), 0);

-- UPDATE : U de CRUD

UPDATE
	joueur
SET
	date_derniere_connexion = '2023-10-10 15:12:30'
WHERE
	id = 1;
	
UPDATE
	joueur
SET
	pseudo = LOWER(pseudo),
	email = UPPER(email);
	
-- DELETE: D de CRUD
DELETE FROM
	joueur
WHERE
	id = 2;

-- Supprime tous les enregistrements de la table
DELETE FROM
	joueur;

-- Suppression de tous les enregistrements de manière optimisée
TRUNCATE TABLE
	joueur;
