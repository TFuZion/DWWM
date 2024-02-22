# Les villes de France

## Objectifs

- Maitriser la clause SELECT
- Comprendre le fonctionnement d'une requête

## Sujet

Après avoir inséré les données de villes_france.sql et departement.sql :

1. Obtenir la liste des 10 villes les plus peuplées en 2012nomnom
2. Obtenir la liste des 50 villes ayant la plus faible superficie
3. Obtenir la liste des départements d’outre-mer, c’est-à-dire ceux dont le numéro de département commençant par “97”
4. Obtenir le nom des 10 villes les plus peuplées en 2012, ainsi que le nom du département associé
5. Obtenir la liste du nom de chaque département, associé à son code et du nombre de commune au sein de ces départements, en triant afin d’obtenir en priorité les départements qui possèdent le plus de communes
6. Obtenir la liste des 10 plus grands départements, en termes de superficie
7. Compter le nombre de villes dont le nom commence par “Saint”
8. Obtenir la liste des villes qui ont un nom existants plusieurs fois, et trier afin d’obtenir en premier celles dont le nom est le plus souvent utilisé par plusieurs communes
9. Obtenir en une seule requête SQL la liste des villes dont la superficie est supérieure à la superficie moyenne
10. Obtenir la liste des départements qui possèdent plus de 2 millions d’habitants
11. Remplacez les tirets par un espace vide, pour toutes les villes commençant par “SAINT-” (dans la colonne qui contient les noms en majuscule)

```sql
CREATE DATABASE if NOT EXISTS exercice05
	CHARACTER SET utf8mb4
	COLLATE UTF8MB4_GENERAL_CI;


ville_nom_reel
ville_departement
ville_code_postal
ville_commune
ville_population_2012
ville_surface

SELECT * FROM villes_france_free LIMIT 5
SELECT * FROM departement LIMIT 5

-- Q10
SELECT d.departement_nom, SUM(v.ville_population_2012) AS departement_population
FROM  villes_france_free AS v
left JOIN departement AS d ON v.ville_departement = d.departement_code
GROUP BY d.departement_nom
HAVING departement_population > 2000000
ORDER BY departement_population DESC

-- Q9
SELECT ville_nom_reel, ville_surface
FROM villes_france_free
WHERE ville_surface > (SELECT AVG(ville_surface) FROM villes_france_free)

-- Q8
ERROR


-- Q7
SELECT COUNT(ville_nom_reel) AS total_ville_saint
FROM villes_france_free
WHERE ville_nom_reel LIKE 'Saint%'

-- Q6
SELECT d.departement_nom, SUM(v.ville_surface) AS departement_surface
FROM  villes_france_free AS v
left JOIN departement AS d ON v.ville_departement = d.departement_code
GROUP BY d.departement_nom
ORDER BY departement_surface DESC 
LIMIT 10

-- Q5
SELECT d.departement_nom, d.departement_code, COUNT(v.ville_departement) AS nombre_commune_departement
FROM  villes_france_free AS v
INNER JOIN departement AS d ON d.departement_code = v.ville_departement
GROUP BY v.ville_departement

-- Q4
SELECT villes_france_free.ville_nom_reel, villes_france_free.ville_population_2012, departement.departement_nom
FROM villes_france_free
INNER JOIN departement ON villes_france_free.ville_departement = departement.departement_code
ORDER BY ville_population_2012 DESC
LIMIT 10

-- Q3
SELECT ville_nom_reel, ville_code_postal
FROM villes_france_free
WHERE ville_code_postal LIKE '97%'

-- Q2
SELECT ville_nom_reel, ville_surface
FROM villes_france_free
ORDER BY ville_surface
LIMIT 50

-- Q1
SELECT ville_nom_reel, ville_population_2012
FROM villes_france_free
ORDER BY ville_population_2012 DESC
LIMIT 10
```
