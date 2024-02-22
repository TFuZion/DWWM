# Exercice 02

```sql
CREATE TABLE Students (
student_id INT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
age INT,
grade VARCHAR(10)
);
```

1.  Ajoutez trois nouveaux étudiants à la table:
    - Prénom : Maria, Nom: Rodriguez, Âge : 21, Note : B
    - Prénom : Ahmed, Nom: Khan, Âge : 19, Note : A
    - Prénom : Emily, Nom: Baker, Âge : 22, Note : C
2.  Mettez à jour la note de l'étudiant ayant le prénom "Maria" pour la changer de "B" à "A".
    - Augmentez l'âge de tous les étudiants de 1 an.
3.  Supprimez l'étudiant ayant le prénom "Emily" de la table
    - Supprimez tous les étudiants dont l'âge est inférieur à 20 ans
4.  Videz complètement la table "Students" en utilisant la commande TRUNCATE

```sql
CREATE DATABASE IF NOT EXISTS exercice02
	CHARACTER SET utf8mb4
	COLLATE UTF8MB4_GENERAL_CI;

USE exercice02;

CREATE TABLE Students (
student_id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
age INT,
grade VARCHAR(10)
);

DROP TABLE Students

SHOW TABLES;

INSERT INTO
	Students
	(first_name, last_name, age, grade)
VALUES
	('Maria', 'Rodriguez', '21', 'B'),
	('Ahmed', 'Khan', '19', 'A'),
	('Emily', 'Baker', '22', 'C');
students
	
UPDATE
	Students
SET
	grade = 'A'
WHERE
	student_id = 1;
	
UPDATE
	Students
SET 
	age = age + 1;
	
DELETE FROM
	Students
WHERE
	student_id = 3

DELETE FROM
	Students
WHERE
	age < 20
	
TRUNCATE TABLE
	Students
```
