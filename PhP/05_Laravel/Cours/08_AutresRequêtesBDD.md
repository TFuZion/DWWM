## Requêtes de BDD

Laravel fournit plusieurs méthodes pour interagir avec la base de données de votre application. Vous pouvez utiliser l'interface de requête de base de données (DB) ou le Query Builder pour écrire des requêtes SQL simples et complexes, ou utiliser Eloquent ORM pour interagir avec votre base de données à l'aide d'objets.

## Interface de requête de base de données (DB)

L'interface de requête de base de données (DB) de Laravel fournit une méthode simple et rapide pour exécuter des requêtes SQL simples et complexes. Vous pouvez utiliser la méthode `DB::select` pour exécuter une requête de sélection et récupérer les résultats sous forme de tableau d'objets. Voici un exemple :

```php
use Illuminate\\Support\\Facades\\DB;

$results = DB::select('select * from users where id = ?', [1]);

```

Vous pouvez également utiliser les méthodes `DB::insert`, `DB::update` et `DB::delete` pour exécuter des requêtes d'insertion, de mise à jour et de suppression.

## Query Builder

Le Query Builder de Laravel fournit une interface fluide pour construire des requêtes SQL. Vous pouvez utiliser le Query Builder pour construire des requêtes de sélection, d'insertion, de mise à jour et de suppression. Voici un exemple de requête de sélection avec le Query Builder :

```php
use Illuminate\\Support\\Facades\\DB;

$results = DB::table('users')
            ->where('id', '=', 1)
            ->get();

```

Dans cet exemple, nous sélectionnons tous les enregistrements de la table `users` où l'ID est égal à 1.

## Eloquent ORM

Vous pouvez placer les requêtes d'Eloquent ORM dans vos contrôleurs, vos modèles ou vos vues. Par exemple, vous pouvez placer une requête de sélection dans un contrôleur pour récupérer des données et les transmettre à une vue. Voici un exemple :

```php
use App\\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return view('users.index', ['users' => $users]);
    }
}

```

Dans cet exemple, nous utilisons la méthode `all` du modèle `User` pour récupérer tous les enregistrements de la table `users` à l'aide d'Eloquent ORM. Nous transmettons ensuite les résultats à une vue nommée `users.index`.