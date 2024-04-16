Eloquent ORM est un outil de mappage objet-relationnel (ORM) inclus dans Laravel. Il vous permet d'interagir avec votre base de données à l'aide d'objets PHP plutôt que d'écrire des requêtes SQL brutes. Eloquent fournit une interface simple et élégante pour définir des modèles, des relations et des requêtes de base de données.

## Définition des modèles

Dans Eloquent, chaque table de votre base de données est représentée par un modèle. Les modèles sont des classes PHP qui définissent les propriétés et les méthodes de vos tables de base de données. Voici un exemple de définition d'un modèle pour une table `users` :

```php
use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    protected $table = 'users';

    protected $fillable = [
        'name',
        'email',
        'password',
    ];
}

```

Dans cet exemple, nous définissons un modèle `User` qui étend la classe `Model` de Laravel. Nous définissons également la propriété `$table` pour spécifier le nom de la table de base de données correspondante. Enfin, nous définissons la propriété `$fillable` pour spécifier les colonnes de la table qui peuvent être remplies en masse.

## Récupération des enregistrements (READ)

Eloquent fournit plusieurs méthodes pour récupérer des enregistrements de votre base de données. Voici quelques exemples :

- `all()` : récupère tous les enregistrements de la table.
- `find($id)` : récupère un enregistrement par son ID.
- `where($column, $operator, $value)` : récupère les enregistrements qui correspondent à une condition donnée.
- `orderBy($column, $direction)` : trie les enregistrements par une colonne donnée.
- `get()` : récupère tous les enregistrements qui correspondent aux conditions données.


```php
use App\\User;

$user = User::find(1);
```

Dans cet exemple, nous récupérons l'enregistrement de la table `users` dont l'ID est égal à 1.

## Création et mise à jour des enregistrements (CREATE/UPDATE)

Eloquent fournit des méthodes simples pour créer et mettre à jour des enregistrements dans votre base de données. Voici quelques exemples :

- `create($attributes)` : crée un nouvel enregistrement avec les attributs donnés.
- `update($attributes)` : met à jour un enregistrement existant avec les attributs donnés.
- `save()` : enregistre un nouvel enregistrement ou met à jour un enregistrement existant.

Voici un exemple de création d'un nouvel enregistrement à l'aide de la méthode `create` :

```php
use App\\User;

$user = User::create([
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'password' => bcrypt('password'),
]);

```

Dans cet exemple, nous créons un nouvel enregistrement dans la table `users` avec les attributs donnés.

## Suppression des enregistrements (DELETE)

Eloquent fournit des méthodes simples pour supprimer des enregistrements de votre base de données. Voici quelques exemples :

- `delete()` : supprime un enregistrement existant.
- `destroy($id)` : supprime un enregistrement par son ID.

Voici un exemple de suppression d'un enregistrement à l'aide de la méthode `delete` :

```php
use App\\User;

$user = User::find(1);

$user->delete();

```
Dans cet exemple, nous supprimons l'enregistrement de la table `users` dont l'ID est égal à 1.