CREATE DATABASE exercice02
	CHARACTER SET utf8mb4
	COLLATE UTF8MB4_GENERAL_CI;
	
USE exercice02;

CREATE TABLE student (
	student_id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	age INT,
	grade VARCHAR(10)
);

INSERT INTO 
	student
	(first_name, last_name, age, grade)
VALUES
	('Maria', 'Rodriguez', 23, 'B'),
	('Ahmed', 'Khan', 19, 'A'),
	('Emily', 'Baker', 22, 'C');
	
SELECT * FROM student;

UPDATE
	student
SET
	grade = 'A'
WHERE
	first_name = 'Maria';
	
UPDATE
	student
SET
	age = age + 1;
	
DELETE FROM
	student
WHERE
	first_name = 'Emily';
	
DELETE FROM
	student
WHERE
	age < 20;

TRUNCATE TABLE student;