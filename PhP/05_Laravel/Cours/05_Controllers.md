# Les Controllers

Les controllers dans Laravel sont des **classes** qui regroupent la logique de traitement des requêtes HTTP.
Au lieu de définir toute la logique de traitement des requêtes dans les fichiers routes, il est préférable d'organiser cette logique
à l'aide de controllers.  

Par défaut, les controllers sont stockés dans le répertoire `app/Http/Controllers`

## Création de Controllers

Pour générer rapidement un nouveau controller, vous pouvez utiliser la commande Artisan make:controller.

```bash
# Par exemple, pour un controller lié aux films
php artisan make:controller MovieController
```

## Utilisation des Controllers

Une fois que vous avez écrit une classe et une méthode de controller, vous pouvez définir une route vers la méthode du controller en question

```php
// Exemple de routeur qui appelle un controller User
use App\Http\Controllers\UserController

Route::get('/user/{id}', [UserController::class, 'show'])
```

Lorsqu'une requête entrante correspond à l'URI de la route spécifiée, la méthode show sera invoquée
et les paramètres de la route seront passés à la méthode