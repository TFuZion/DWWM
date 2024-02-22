USE demo02;

-- Sélectionner des informations dans les tables

SELECT
	pseudo,
	email
FROM
	joueur;
	
SELECT
	*
FROM	
	joueur;

-- Utilisation de filtres avec la clause WHERE

SELECT
	pseudo
FROM
	joueur
WHERE
	LENGTH(pseudo) > 3;

-- Utilisation de filtre en utilisant les opérateurs OR et AND
SELECT
	pseudo,
	email
FROM
	joueur
WHERE
	date_creation > '2020-01-01'
	AND
	is_admin = 0;

	