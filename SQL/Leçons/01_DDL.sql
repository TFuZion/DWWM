-- DATA DEFINITION LANGUAGE

-- MANIPULATION DE DATABASE

-- CREATE

-- CTRL + F9 pour exécuter la sélection
-- On nomme généralement les base de données en snake_case
CREATE DATABASE demo01;

-- Permet de créer une base de données seulement si elle n'existe pas
-- On peut également préciser l'encodage de celle-ci
CREATE DATABASE IF NOT EXISTS demo01
	CHARACTER SET utf8mb4
	COLLATE utf8mb4_general_ci;

-- ALTER
ALTER DATABASE demo01
	CHARACTER SET utf8mb4
	COLLATE utf8mb4_general_ci;

-- DROP

DROP DATABASE demo01;
DROP DATABASE IF EXISTS demo01;

-- MANIPULATION DE TABLE

-- CREATE

-- On se place sur la bbd souhaitée à l'aide du mot clé USE
USE demo01;

CREATE TABLE utilisateur (
	id INT,
	prenom VARCHAR(50),
	nom VARCHAR(50)
);

-- Data types : https://mariadb.com/kb/en/data-types/

CREATE TABLE sample (
	id INT,
	titre VARCHAR(50),
	is_delete BOOLEAN, -- pareil que TINYINT(1)
	letter CHAR(1),
	price DECIMAL(10, 2) -- 10 chiffres dont 2 après la virgule
);

-- DROP 

DROP TABLE utilisateur;

-- ALTER

ALTER TABLE utilisateur
	ADD email VARCHAR(255),
	MODIFY nom VARCHAR(60);

-- Renommer une table
ALTER TABLE sample
	RENAME TO sample_renamed;
	
-- Contraintes

CREATE TABLE blog (
	id INT AUTO_INCREMENT PRIMARY KEY, -- l'id du blog va être géré par la base de données
	titre VARCHAR(50) DEFAULT 'titre par défaut', -- Valeur par défaut quand aucune n'est renseignée
	`description` VARCHAR(500) NOT NULL -- Obligation de saisir une valeur
);

CREATE TABLE user_role (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nom VARCHAR(30) NOT NULL UNIQUE, -- Garantir l'unicité du nom (pas de doublon)
	raccourci CHAR(1) CHECK(raccourci >= 'a' AND raccourci <= 'z') -- Ajout d'une vérification sur la colonne
);

DROP TABLE user_role;

-- Nommage des contraintes : généralement plus élégant et propre
CREATE TABLE user_role (
	id INT AUTO_INCREMENT,
	nom VARCHAR(30) NOT NULL,
	raccourci CHAR(1),
	CONSTRAINT pk_user_role_id PRIMARY KEY(id),
	CONSTRAINT ak_user_role_nom UNIQUE(nom),
	CONSTRAINT ck_user_role_raccourci CHECK(raccourci >= 'a' AND raccourci <= 'z')
);

-- Gestion des clés étrangères
CREATE TABLE adresse (
	id INT AUTO_INCREMENT PRIMARY KEY,
	rue VARCHAR(100) NOT NULL,
	ville VARCHAR(150) NOT NULL,
	code_postal VARCHAR(5) NOT NULL,
	pays VARCHAR(50) NOT NULL,
	utilisateur_id INT NOT NULL,
	-- On précise la colonne qui va servir de clé étrangère
	-- On la relie ensuite à la colonne à laquelle elle fait référence dans une autre table
	CONSTRAINT fk_utilisateur_id FOREIGN KEY(utilisateur_id) REFERENCES utilisateur(id)
);

ALTER TABLE utilisateur
	ADD CONSTRAINT pk_utilisateur_id PRIMARY KEY(id);
