# Exercice 01

- Créer une base de données nommée: `exercice01`
- Créer une table etudiant avec les informations suivantes:
  - id
  - prenom
  - nom
  - age
  - niveau
- Modifier la table pour ajouter une contrainte de clé primaire sur la colonne ID
- Créer une table cursus avec les informations de cursus et rajouter une contrainte de clé étrangère sur l'étudiant (imaginez votre classe de DWWM)
- Un étudiant peut participer à plusieurs cours, et un cours est suivi par plusieurs étudiants, veillez à rajouter la date à laquelle l'étudiant a commencé à suivre le cours

```sql
CREATE DATABASE exercice01

USE DATABASE exercice01

ALTER DATABASE exercice01
	CHARACTER SET utf8mb4
	COLLATE utf8mb4_general_ci;
	
CREATE TABLE etudiant (
	id INT NOT NULL,
	prenom VARCHAR(50) NOT NULL,
	nom VARCHAR(50) NOT NULL,
	age TINYINT(3) NOT NULL,
	niveau VARCHAR(10),
	CONSTRAINT ck_age CHECK(age > 0)
)

ALTER TABLE etudiant
	ADD CONSTRAINT pk_etudiant_id PRIMARY KEY(id);

ALTER TABLE etudiant
	MODIFY id INT NOT NULL AUTO_INCREMENT;
	
CREATE TABLE cursus (
	id INT AUTO_INCREMENT PRIMARY KEY,
	titre VARCHAR(50),
	niveau_diplome INT
)

ALTER TABLE etudiant
	ADD COLUMN cursus_id INT NOT NULL,
	ADD CONSTRAINT fk_cursus_id FOREIGN KEY(cursus_id) REFERENCES cursus(id);


CREATE TABLE cours (
	id INT AUTO_INCREMENT PRIMARY KEY,
	titre VARCHAR(20) NOT NULL
)
	
	
CREATE TABLE etudiant_cours (
	id INT AUTO_INCREMENT PRIMARY KEY,
	etudiant_id INT NOT NULL,
	CONSTRAINT fk_etudiant_id FOREIGN KEY(etudiant_id) REFERENCES etudiant(id),
	cours_id INT NOT NULL,
	CONSTRAINT fk_cours_id FOREIGN KEY(cours_id) REFERENCES cours(id)
)

ALTER TABLE etudiant_cours
	ADD COLUMN date_debut_cours DATETIME DEFAULT NOW();
```
