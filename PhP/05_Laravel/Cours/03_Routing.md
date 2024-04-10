# Routing

Toutes les routes de Laravel sont définies dans vos fichiers de route, qui sont situés dans le répertoire `routes`.

Le fichier `routes/web.php` va surtout nous intéresser **dans un premier temps**.
Il définit les routes pour votre interface web. Ces routes sont automatiquement assignées
au groupe de middleware `web`, qui fournit par défaut des fonctionnalités telles que l'état de la session et la protection CSRF.

Les routes peuvent être définies en utilisant les méthodes `Route::get()`, `Route::post()`, `Route::put()`, `Route::patch()`, `Route::delete()`.
Le premier argument de la méthode est l'URI de la route, tandis que le second argument est la fonction de rappel ou le nom du contrôleur et de la méthode à exécuter.

## Le routage de base

Les routes les plus simples de Laravel acceptent un URI et une fonction anonyme
```php
Route::get('/', function() {
return "Hello World";
})
```

## Méthodes de route

```php
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```

En plus de ces méthodes simples, deux autres cas de figure sont possibles:

- **match:** Pour répondre à plusieurs verbes HTTP en même temps.
```php
Route::match(['get', 'post'], ("/"), function() {
 //
});
```

- **any:** pour répondre à tous les verbes HTTP.
```php
Route::any('/', function() {
//
});
```

## Protection CSRF

Comme nos routes passent par les middlewares web, une protection CSRF est appliquée par défaut par Laravel.
Tous les formulaires HTML pointant vers des routes POST, PUT, PATCH ou DELETE définies dans le fichier `routes/web.php` doivent inclure un champ de jeton CSRF.
Sinon, la demande sera rejetée.

```php
<form method="POST" action="/profile">
@csrf
//...
</form>
```

## Les vues

Si votre route ne doit renvoyer qu'une vue, vous pouvez utiliser la méthode `Route::view`.
Elle accepte deux arguments comme les autres, mais vous pouvez fournir un tableau de données à transmettre à la vue en tant que troisième arguments (optionnel):

```php
Route::view('/form', 'formulaire');
// Avec l'argument optionnel
Route::view('/form', 'formulaire', ['name' => 'Benoit']);
```

## Routes de redirection

Si vous définissez une route qui redirige vers une autre URI, vous pouvez
utiliser la méthode `Route::redirect`.
Par défaut, `Route::redirect` envoie un code d'état 302. Vous pouvez personnaliser le code d'état en utilisant un troisième paramètre optionnel.

```php
Route::redirect('/uri', '/redirection', 301);
```

Ou, vous pouvez utiliser la méthode `Route::permanentRedirect` pour renvoyer un code d'état 301.

## Injections de dépendances
Vous pouvez indiquer les dépendances requises par votre route dans la signature de la fonction de rappel de votre route.
L'une des plus utilisées est `Request`. L'injection de la dépendance Request dans Laravel
permet d'accéder à l'instance actuelle de la requête HTTP dans une fonction de rappel de route ou une méthode de contrôleur.
Cela permet d'interagir avec la requête entrante et d'obtenir des informations telles que les paramètres de la requête, les en-têtes, les cookies et les données de formulaire.

```php
Route::get('/users', function (Request $request) {
    $name = $request->input('name');
});
```

## Paramètres de route

### Paramètres obligatoires

Parfois, vous devrez capturer des segments de l'URI dans votre route. Par exemple, vous devrez
peut-être capturer l'ID d'un utilisateur à partir de l'URL.

```php
Route::get('/user/{id}', function (string $id) {
    return 'User '.$id;
})
```

Vous pouvez définir autant de paramètres de route que nécessaire:
```php
Route::get('/posts/{post}/comments/{comment}', function (string $postId, string $commentId) {
    // ...
})
```

Les paramètres de route sont toujours encadrés par des accolades `{}` et doivent se composer de caractères alphabétiques.
Les tirets de soulignements sont également acceptables. Les paramètres de route sont injectés dans les rappels de route en fonction de leur ordre.

## Paramètres facultatifs

Parfois, vous devrez peut-être spécifier un paramètre de route qui n'est pas toujours présent dans l'URI.
Vous pouvez le faire en plaçant un point d'interrogation après le nom du paramètre. Mais vous devez donner à sa variable correspondante une valeur par défaut:

```php
Route::get('/user/{name?}', function(?string $name = "visitor") {
 return $name;
})
```

## Paramètres et injections de dépendance

Si votre route a des dépendances, vous devez répertorier vos params de route **APRES** vos dépendances.

```php
use Illuminate/Http/Request;

Route::get('/user/{id}', function(Request $request, string $id) {
    return 'User'.$id;
});
```

## Contraintes d'expression régulière

Vous pouvez contraindre le format de vos paramètres de route à l'aide de la méthode where sur une instance de route. La méthode where accepte le nom du paramètre et une expression régulière définissant la façon dont le paramètre doit être contraint :

```php
Route::get('/user/{name}', function (string $name) {
    // ...
})->where('name', '[A-Za-z]+');

Route::get('/user/{id}', function (string $id) {
    // ...
})->where('id', '[0-9]+');

Route::get('/user/{id}/{name}', function (string $id, string $name) {
    // ...
})->where(['id' => '[0-9]+', 'name' => '[a-z]+']);
```

Pour plus de commodité, certaines expressions régulières couramment utilisées ont des méthodes d'aide qui vous permettent d'ajouter rapidement des contraintes de motif à vos routes :

```php
Route::get('/user/{id}/{name}', function (string $id, string $name) {
    // ...
})->whereNumber('id')->whereAlpha('name');

Route::get('/user/{name}', function (string $name) {
    // ...
})->whereAlphaNumeric('name');

Route::get('/user/{id}', function (string $id) {
    // ...
})->whereUuid('id');

Route::get('/user/{id}', function (string $id) {
    //
})->whereUlid('id');

Route::get('/category/{category}', function (string $category) {
    // ...
})->whereIn('category', ['movie', 'song', 'painting']);
```

Si la requête entrante ne correspond pas aux contraintes de motif de la route, une réponse HTTP 404 sera retournée.

## Contraintes globales

Si vous souhaitez qu'un paramètre de route soit toujours contraint par une expression régulière donnée, vous pouvez utiliser la méthode pattern. Vous devez définir ces motifs dans la méthode boot de votre classe App\Providers\AppServiceProvider :

```php
use Illuminate\\Support\\Facades\\Route;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Route::pattern('id', '[0-9]+');
}
```

Une fois le motif défini, il est automatiquement appliqué à toutes les routes utilisant ce nom de paramètre :

```php
Route::get('/user/{id}', function (string $id) {
    // Only executed if {id} is numeric...
});
```

## Noms de route

Les noms de route permettent de générer facilement des URL ou des redirections pour des routes spécifiques.
Vous pouvez spécifier un nom de route en chaînant la méthode name() à la définition de la route

```php
Route::get('user/profile', function() {
// ...
})->name('profile');
```

**Attention:** Les noms de route doivent toujours être uniques.

```php
$url = route('profile');

// Génération de redirection
return redirect()->route('profile');
```

Si la route nommée définit des paramètres, vous pouvez passer les paramètres en tant que deuxième argument de la fonction route()

```php
Route::get('/user/{id}/profile', function (string $id) {
// ...
})->name('profile', ['id' => 1]);

$url = route('profile', ['id' => 1])
// /user/1/profile
```



