CREATE DATABASE exercice01
	CHARACTER SET utf8mb4
	COLLATE UTF8MB4_GENERAL_CI;
	
USE exercice01;

CREATE TABLE etudiant (
	id INT NOT NULL,
	prenom VARCHAR(50) NOT NULL,
	nom VARCHAR(50) NOT NULL,
	age TINYINT(3),
	niveau VARCHAR(10),
	CONSTRAINT ck_age CHECK(age > 0)
);

ALTER TABLE etudiant
	ADD CONSTRAINT pk_etudiant_id PRIMARY KEY(id);
	
ALTER TABLE etudiant
	MODIFY age INT NOT NULL;
	
ALTER TABLE etudiant
	MODIFY id INT NOT NULL AUTO_INCREMENT;

-- On créé une table cursus si elle n'existe pas
-- On affecte la valeur de la date en cours par défaut
CREATE TABLE IF NOT EXISTS cursus (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nom VARCHAR(30) NOT NULL,
	date_creation DATETIME DEFAULT NOW()
);

-- Création d'une colonne puis ajout de la contrainte de clé étrangère
ALTER TABLE etudiant
	ADD COLUMN cursus_id INT,
	ADD CONSTRAINT fk_etudiant_cursus_id FOREIGN KEY(cursus_id) REFERENCES cursus(id);
