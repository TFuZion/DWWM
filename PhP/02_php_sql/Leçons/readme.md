# Activer PDO

1. Taper `php --ini` dans votre terminal pour trouver le fichier de configuration de PHP
2. Éditer le fichier avec VsCode
3. Faites `CTRL + F` et chercher `pdo_mysql`
4. Dé-commenter la ligne en retirant le `;` en préfixe

# Utiliser PHP Storm
1. Lancer la base de données sur Laragon (Menu -> MariaDB -> Lancer MariaDB)
2. Cliquer sur l'icone de base de données dans la navbar sur la droite 
3. Cliquer sur l'icone `+` -> `Data Source` -> `MariaDB` (ou MySQL) 
4. Saisir le nom d'utilisateur (root) et le mot de passe (votre mot de passe)
5. Cliquer sur `Apply` et `Ok`

## PDO MySQL/MariaDB

### 1. Créer une connexion à la base de données

- PDO pour PHP Data Object nous permet d'interroger des bases de données relationnelles (mysql, postgreSQL, mariadb, ...)
- Pour créer une connexion à une base de données, on instancie un objet PDO
```php
$db = new PDO(...);
```
- Le constructeur de PDO attend plusieurs paramètres:
  1. DSN DataSourceName : En général, un DSN est constitué du nom du pilote PDO, suivi d'une syntaxe spécifique au pilote : `mysql:host=localhost;`
  2. Le username: le nom de l'utilisateur que l'on va utiliser pour la connexion à la base, généralement `root`
  3. Le mot de passe: le mot de passe de l'utilisateur avec lequel on se connecte

```php
$db = new PDO("mysql:host=localhost", "root", "");
```

- Ici `$db` est une instance de la classe PDO

### 2. Exécuter une requête SQL sans binding de paramètres
- Une instance de PDO possède une méthode `exec()` pour effectuer des requêtes sans lecture et sans binding de paramètres
- On l'utilisera généralement pour créer des requêtes de DDL (CREATE, DROP, RENAME, TRUNCATE) et éventuellement de DML (INSERT, DROP, UPDATE)

### 3. Exécuter des requêtes avec binding de paramètres (protection contre l'injection SQL)
- L'objet PDO nous fournit la méthode `prepare()` qui permet de préparer une requête SQL avant de l'exécuter
- La méthode `prepare()` attend un paramètre qui est une requête SQL avec les paramètres à binder
- La méthode `prepare()` renvoie un objet de type `PDOStatement`
- Un objet PDOStatement nous permet de: 
  - de binder les paramètres depuis une requête SQL en utilisant le préfixe `:` devant le paramètre à remplacer
  - D'exécuter les requêtes préparées avec la méthode `execute()`
  - De lire un enregistrement avec la méthode `fetch()`
  - De lire TOUS les enregistrements avec la méthode `fetchAll()`

- Il existe 2 techniques pour binder les paramètres:
  1. Lors de l'exécution de la requête avec un tableau associatif
```php
$query = "INSERT INTO user (name) VALUES (:name);"
$statement = $db->prepare($query);
$statement->execute(['name' => 'jean']);
```
  2. Avec la méthode `bindValue` ou `bindParam`:

```php
$query = "INSERT INTO user (name) VALUES (:name);"
$statement = $db->prepare($query);
// bindValue attend en paramètre le nom du paramètre ainsi que la valeur à ajouter
$statement->bindValue("name", "jean");
$statement->execute();
```

### 4. Lire des enregistrements depuis la base de données 

- Pour lire des enregistrements, nous allons utiliser une méthode de l'objet `PDOStatement`
- PDOStatement nous fournit 2 méthode pour lire des enregistrements:
  1. `fetch`
  2. `fetchAll`

**fetch**

- fetch va lire les enregistrements un à un, lorsque tous les enregistrements ont été lus, la méthode fetch nous renvoie la valeur `false`
- La méthode fetch attend en paramètre une constante pour savoir comment renvoyer le résultat de la requête
- Par défaut, fetch renvoie deux tableaux: un tableau indexé par valeur numérique (ex: ["toto", "tata", 22]) et un tableau associatif de clé valeurs (ex: ["prenom" => "toto", "nom" => "tata", "age" => 22]);
- Pour optimiser la lecture, on utilisera généralement la constante `PDO::FETCH_ASSOC` pour renvoyer uniquement un tableau associatif

```php
$db = new PDO("mysql:host=localhost", "root", "");
$request = "SELECT firstname, lastname, age FROM users WHERE id=:id;";
$statement = $db->prepare($request);
$statement->execute(["id" => 1]);

// Renvoie l'enregistrement récupéré en base sous forme de tableau associatif
$userTab = $statement->fetch(PDO::FETCH_ASSOC);
echo $userTab["firstname"];
```

- Etant donné que fetch nous renvoie `false` lorsqu'il n'y a plus d'enregistrements à lire, nous pouvons itérer jusqu'à ce que sa valeur vale `false`

```php
$db = new PDO("mysql:host=localhost", "root", "");
$request = "SELECT firstname, lastname, age FROM users WHERE age > :age;";
$statement = $db->prepare($request);
$statement->execute(["age" => 18]);

// On lit tous les enregistrements jusqu'à ce que fetch renvoie `false`
$users = [];
while($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    $users[] = $row;
}

print_r($users);
```

**fetchAll**

- `PDOStatement` nous fournit la méthode `fetchAll` qui nous permet de lire directement tous les enregistrements de la requête 
- Elle attend le même paramètre que `fetch`, à savoir une constante pour savoir dans quel format renvoyer les enregistrements

```php
$db = new PDO("mysql:host=localhost", "root", "");
$request = "SELECT firstname, lastname, age FROM users WHERE age > :age;";
$statement = $db->prepare($request);
$statement->execute(["age" => 18]);

$users = $statement->fetchAll(PDO::FETCH_ASSOC);
print_r($users);
```