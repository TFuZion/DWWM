-- Création de la base de données
CREATE DATABASE IF NOT EXISTS exercice03;
USE exercice03;

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

SELECT
	*
FROM
	Users;
	
SELECT
	first_name,
	last_name,
	job
FROM
	Users;
	
SELECT
	first_name,
	last_name,
	job
FROM
	Users
WHERE
	job = 'Developer'
	AND
	(SUBSTRING(first_name, 1, 1) = 'J'
	OR
	LENGTH(last_name) > 5);
	
SELECT * FROM users;

SELECT
	*
FROM
	users
WHERE
	job <> 'developer';
	
SELECT
	*
FROM
	users
WHERE
	first_name = 'John';
	
SELECT
	*
FROM
	users
WHERE
	salary >= 3000;
	
SELECT
	*
FROM
	users
WHERE
	age < 30
	OR
	age >= 35;

SELECT
	*
FROM
	users
WHERE
	job = 'Teacher'
	AND
	salary > 2600;
	
SELECT
	*
FROM
	users
WHERE
	birth_location = 'New York'
	AND
	(salary >= 3000 AND salary <= 3500)
	AND
	NOT (job = 'lawyer' OR job = 'doctor');
	
SELECT
	*
FROM
	users
WHERE
	birth_location = 'New York'
	AND
	(salary BETWEEN 3000 AND 3500)
	AND
	(job NOT IN ('lawyer', 'doctor'));
	
SELECT
	DISTINCT first_name
FROM
	users;
	
SELECT
	first_name,
	salary
FROM
	users
ORDER BY
	first_name, salary DESC;
	
SELECT
	first_name, last_name, birth_date
FROM
	users
ORDER BY
	birth_date
LIMIT
	3;
	
SELECT
	first_name, last_name, birth_date
FROM
	users
ORDER BY
	birth_date
LIMIT
	3 OFFSET 1;
	
SELECT
	first_name,
	last_name,
	age
FROM
	users
ORDER BY
	age DESC
LIMIT
	5;
	
SELECT
	first_name,
	last_name
FROM
	users
ORDER BY
	first_name
LIMIT
	5 OFFSET 5;
	
SELECT
	first_name,
	last_name,
	salary
FROM
	users
ORDER BY
	salary DESC
LIMIT
	3;
	
SELECT
	MIN(age) AS age_minimum,
	MAX(age) AS age_maximum,
	COUNT(*) AS nombre_users,
	AVG(salary) AS salaire_moyen
FROM
	users;
	
SELECT
	MIN(salary) AS salaire_minimum
FROM
	users;
	
SELECT
	MAX(age) AS age_max_ingenieur
FROM
	users
WHERE
	job = 'Engineer';
	
SELECT
	AVG(salary) AS salaire_moyen_prof
FROM
	users
WHERE
	job = 'Teacher';
	
SELECT
	SUM(salary) AS somme_salaires
FROM
	users;
	
SELECT
	birth_location,
	SUM(salary) AS somme_salaire_par_lieu
FROM
	users
GROUP BY
	birth_location
ORDER BY
	birth_location;
	
SELECT
	birth_location,
	AVG(salary) AS somme_salaire_par_lieu
FROM
	users
GROUP BY
	birth_location
HAVING
	somme_salaire_par_lieu > 3000
ORDER BY
	birth_location;

-- Commence par S, on utilise le wildcard '%' après la lettre souhaitée
SELECT
	first_name,
	last_name
FROM
	users
WHERE
	first_name LIKE 'S%';

-- Fini par 'a'
SELECT
	first_name
FROM
	users
WHERE
	first_name LIKE '%a';

-- Contient la lettre 't'
SELECT
	first_name
FROM
	users
WHERE
	first_name LIKE '%t%';

SELECT
	first_name
FROM
	users
WHERE
	first_name LIKE '_h%';
	
SELECT
	first_name
FROM
	users
WHERE
	first_name LIKE 'D%';
	
SELECT
	last_name
FROM
	users
WHERE
	last_name LIKE '%son';
	
SELECT
	first_name
FROM
	users
WHERE
	first_name LIKE '_____';

SELECT
	first_name,
	last_name,
	job
FROM
	users
WHERE
	job LIKE '%doctor%';
