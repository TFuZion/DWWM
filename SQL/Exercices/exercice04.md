# Exercice 04 Jointures

1. La table "Clients" a les colonnes suivantes :
   - id (clé primaire), prenom, ville
2. La table "Achats" a les colonnes suivantes
   - id, produit, montant, client_id
3. Insérez au moins cinq clients dans la table "Clients"
4. Insérez au moins dix achats dans la table "Achats", en veillant à ce que certains clients aient effectué des achats et d'autres non
5. Faire une jointure qui permet de récupérer tous les clients ayant une commande : prenom, nom, nombre_achat
6. Faire une jointure permettant de récupérer tous les clients qui n'ont pas de commandes: prenom, nom

```sql
CREATE DATABASE if NOT EXISTS exercice04
	CHARACTER SET utf8mb4
	COLLATE utf8mb4_general_ci;
	
USE exercice04;

CREATE TABLE Clients (
	id int primary key AUTO_INCREMENT,
	nom VARCHAR(20) NOT NULL,
	prenom VARCHAR(20) NOT NULL,
	ville VARCHAR(50) NOT NULL
)

CREATE TABLE Achats (
	id INT PRIMARY KEY AUTO_INCREMENT,
	produit VARCHAR(30) NOT NULL,
	montant DECIMAL(10, 2) NOT NULL,
	client_id INT NOT NULL,
	CONSTRAINT fk_client_id FOREIGN KEY(client_id) REFERENCES clients(id)
)

INSERT INTO
	Clients
	(nom, prenom, ville)
VALUES
	('Dupont', 'Marie', 'Paris'),
	('Johnson', 'Michael', 'New York'),
	('Garcia', 'Sofia', 'Barcelone'),
	('Müller', 'Hans', 'Berlin'),
	('Smith', 'Emily', 'Londres');
	

INSERT INTO
	achats
	(produit, montant, client_id)
VALUES
	('Téléphone portable', 500.00, 1),
	('Ordinateur portable', 1200.00, 2),
	('Télévision', 800.00, 1),
	('Console de jeux vidéo', 400.00, 3),
	('Livre', 20.00, 3),
	('Chaussures de sport', 100.00, 1),
	('Sac à dos', 50.00, 4),
	('Montre', 300.00, 3),
	('Appareil photo', 600.00, 1),
	('Écouteurs sans fil', 80.00, 4);
	

SELECT clients.nom, clients.prenom,  COUNT(achats.produit) AS nombre_achat
FROM clients
INNER JOIN achats ON clients.id = achats.client_id
GROUP BY Clients.id;

SELECT clients.nom, clients.prenom, COUNT(achats.produit) AS nombre_achat
FROM clients
LEFT JOIN achats ON clients.id = achats.client_id
WHERE achats.client_id IS NULL; 

```