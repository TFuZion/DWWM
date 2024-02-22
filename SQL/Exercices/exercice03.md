# Exercice03

1. Exécuter le script suivant:
2. Dans un premier temps, récupérez l'intégralité de la table Users
3. Modifiez la requête pour n'afficher que les colonnes first_name, last_name et job
4. Dans un première requête, récupérez tous les utilisateurs dont le métier n'est pas développeur
5. Dans une seconde requête, récupérez tous les utilisateurs dont le prénom est John.
6. Dans une dernière requête, récupérez tous les utilisateurs dont le salaire est supérieur ou égal à 3000.
7. Dans un première requête, récupérez tous les utilisateurs dont l'âge est inférieur à 30ans ou supérieur et égal à 35ans.
8. Récupérez ensuite tous les utilisateurs dont le métier est professeur et le salaire est supérieur à 2600.

```sql
-- Création de la base de données
CREATE DATABASE IF NOT EXISTS test_bdd;
USE test_bdd;

-- Supprime la table Users si elle existe déjà
DROP TABLE IF EXISTS Users;

-- Création de la table Users
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    job VARCHAR(100),
    birth_date DATE,
    birth_location VARCHAR(100)
);

-- Insertion de données aléatoires dans la table Users
INSERT INTO Users (first_name, last_name, job, birth_date, birth_location)
VALUES
    ('John', 'Doe', 'Developer', '1995-05-12', 'New York'),
    ('Alice', 'Smith', 'Designer', '1988-09-28', 'London'),
    ('Michael', 'Johnson', 'Engineer', '1977-02-05', 'Los Angeles'),
    ('Emily', 'Brown', 'Teacher', '1992-04-18', 'Paris'),
    ('David', 'Lee', 'Doctor', '1985-11-30', 'Tokyo'),
    ('Sarah', 'Wilson', 'Lawyer', '1990-06-08', 'Sydney'),
    ('Daniel', 'Anderson', 'Developer', '1983-12-21', 'Toronto'),
    ('Jessica', 'Taylor', 'Engineer', '1991-10-15', 'Berlin'),
    ('Christopher', 'Moore', 'Designer', '1997-01-04', 'Rome'),
    ('Olivia', 'Jackson', 'Teacher', '1994-08-22', 'Moscow'),
    ('James', 'Doe', 'Engineer', '1987-03-12', 'New York'),
    ('Sophia', 'Smith', 'Developer', '1993-07-28', 'London'),
    ('Emma', 'Johnson', 'Designer', '1980-09-05', 'Los Angeles'),
    ('Daniel', 'Brown', 'Doctor', '1992-02-18', 'Paris'),
    ('David', 'Lee', 'Lawyer', '1985-11-30', 'Tokyo');

-- Désactiver le Safe Update Mode
SET SQL_SAFE_UPDATES = 0;

-- Ajouter la colonne "age" et "salary" à la table "Users"
ALTER TABLE Users
ADD COLUMN age INT,
ADD COLUMN salary INT NOT NULL DEFAULT 0;

-- Mettre à jour la colonne "age" avec les âges calculés à partir de la date de naissance
UPDATE Users
SET age = TIMESTAMPDIFF(YEAR, birth_date, CURDATE());

-- Mettre à jour la colonne "salaire" avec des valeurs aléatoires entre 2000 et 3500
UPDATE Users
SET salary = FLOOR(2000 + RAND() * (3500 - 2000));

-- Activer le Safe Update Mode
SET SQL_SAFE_UPDATES = 1;

SELECT * FROM users

SELECT
	first_name,
	last_name,
	job
FROM Users

SELECT
	first_name,
	last_name,
	job
FROM
	Users
WHERE
	job <> 'Developer';


SELECT
	first_name,
	last_name,
	job
FROM
	Users
WHERE
	first_name = 'John';


SELECT
	id,
	first_name,
	last_name,
	job,
	salary
FROM
	Users
WHERE
	salary >= 3000;

SELECT
	id,
	first_name,
	last_name,
	age
FROM users
WHERE age < 30 OR age >=35;

SELECT
	id,
	first_name,
	last_name,
	job,
	salary
FROM
	Users
WHERE salary >= 2600 AND job = 'Teacher';


*IN, BETWEEN*
SELECT
	*
FROM
	Users
WHERE
	birth_location = 'New York' AND
	(salary BETWEEN 3000 AND 3500) AND
	NOT (job = 'Doctor' OR job = 'Lawyer');

SELECT
	*
FROM
	Users
WHERE
	job IN ('Engineer');

SELECT
	first_name,
	last_name
FROM
	Users
WHERE
	birth_location IN ('london', 'Paris', 'Berlin');

SELECT
	first_name,
	last_name
FROM
	Users
WHERE
	age BETWEEN 25 AND 35;

SELECT
	first_name,
	last_name
FROM
	Users
WHERE
	job IN ('Developer')
	AND salary > 250


*ORDER BY, DESC, ASC, LIMIT, OFFSET*
SELECT
	first_name, last_name, age
FROM
	users
ORDER BY age DESC
LIMIT 5;

SELECT
	first_name, last_name
FROM
	users
ORDER BY FIRST_name
LIMIT 4 OFFSET 5;

SELECT first_name, last_name, salary
FROM Users
ORDER BY salary DESC
LIMIT 3;


*MIN, MAX, SUM, AVG*
SELECT 
MIN(salary) AS salary_minimum
FROM users

SELECT 
MAX(age) AS age_maximum
FROM users
WHERE job = 'engineer';

SELECT
AVG(salary) AS average_salary
FROM users
WHERE job ='Teacher'

SELECT
SUM(salary) AS total_salary
FROM users


*LIKE*
SELECT first_name
FROM users
WHERE first_name like 'd%';

SELECT last_name
FROM users
WHERE last_name LIKE '%son'

SELECT first_name
FROM users
WHERE first_name LIKE '_____'

SELECT first_name, last_name, job
FROM users
WHERE job LIKE 'do%'
```
