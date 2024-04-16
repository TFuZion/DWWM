# Blade

Blade est le moteur de template fourni avec Laravel. Il permet de créer des vues en utilisant une syntaxe réactive et procédurale.

## Syntaxe de base

Blade utilise des balises spéciales pour insérer du code PHP dans les vues. Les balises Blade sont compilées en code PHP natif, ce qui permet d'obtenir des performances optimales.
Les balises Blade les plus courantes sont:
- `{{ }}`: affiche le contenu d'une variable ou d'une expression PHP.
- `@if, @elseif, @else, @endif`: permet d'utiliser les instructions conditionnelles.
- `@for, @foreach, @while, @endfor, @endforeach, @endwhile` : permet d'utiliser des boucles
- `@include`: permet d'inclure une autre vue dans la vue actuelle
- `@extends`: permet d'étendre une autre vue dans la vue actuelle
- `@section, @show, @yield`: permet de définir des sections dans une vue étendue.

## Héritage de vues

L'héritage de vue dans Laravel vous permet de créer des mises en page réutilisables pour votre application. Vous pouvez définir une mise en page de base qui contient les éléments communs à toutes les pages de votre application, puis étendre cette mise en page pour créer des pages spécifiques.

Dans Laravel, vous pouvez utiliser la méthode `extends()` pour étendre une mise en page de base et la méthode `section()` pour définir des sections dans la mise en page. Voici un exemple :

1. Création d'une mise en page de base :

```html
<!-- resources/views/layouts/app.blade.php -->

<!DOCTYPE html>
<html>
<head>
    <title>Mon application Laravel</title>
</head>
<body>
    <header>
        <!-- En-tête de la page -->
    </header>

    <main>
        @yield('content')
    </main>

    <footer>
        <!-- Pied de page de la page -->
    </footer>
</body>
</html>

```

Dans cet exemple, nous créons une mise en page de base dans le fichier `resources/views/layouts/app.blade.php`. La mise en page contient un en-tête, un pied de page et une section `content` qui sera remplie par le contenu spécifique à chaque page.

2. Extension de la mise en page de base :

```html
<!-- resources/views/pages/accueil.blade.php -->

@extends('layouts.app')

@section('content')
    <h1>Bienvenue sur mon application Laravel !</h1>
    <p>Ceci est la page d'accueil.</p>
@endsection

```

Dans cet exemple, nous créons une page d'accueil dans le fichier `resources/views/pages/accueil.blade.php`. Nous étendons la mise en page de base en utilisant la méthode `extends()` et nous définissons le contenu de la section `content` en utilisant la méthode `section()`. Le contenu de la section `content` sera inséré dans la mise en page de base à l'emplacement de la directive `@yield('content')`.


### Organisation HTML/CSS/JS par héritage
1. Héritage de sections :

```html
<!-- resources/views/layouts/app.blade.php -->

<!DOCTYPE html>
<html>
<head>
    <title>Mon application Laravel</title>
    @yield('head')
</head>
<body>
    <header>
        <!-- En-tête de la page -->
    </header>

    <main>
        @yield('content')
    </main>

    <footer>
        <!-- Pied de page de la page -->
    </footer>

    @yield('scripts')
</body>
</html>

```

Dans cet exemple, nous avons ajouté deux nouvelles sections à la mise en page de base : `head` et `scripts`. Ces sections peuvent être utilisées pour ajouter des feuilles de style et des scripts spécifiques à certaines pages.

```html
<!-- resources/views/pages/accueil.blade.php -->

@extends('layouts.app')

@section('head')
    <link rel="stylesheet" href="/css/accueil.css">
@endsection

@section('content')
    <h1>Bienvenue sur mon application Laravel !</h1>
    <p>Ceci est la page d'accueil.</p>
@endsection

@section('scripts')
    <script src="/js/accueil.js"></script>
@endsection

```

Dans cet exemple, nous avons étendu la mise en page de base et défini le contenu des sections `head`, `content` et `scripts` pour la page d'accueil.

## Passage de données dans les vues

Dans Laravel, vous pouvez passer des données de votre contrôleur à votre vue en utilisant plusieurs méthodes. Voici les méthodes les plus courantes :

---
- `view()->with()` : cette méthode vous permet de passer une variable à une vue. La variable sera disponible dans la vue sous le nom que vous avez spécifié. Voici un exemple :

```php
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::all();

        return view('users.index')->with('users', $users);
    }
}
```
*Dans cet exemple, nous récupérons tous les utilisateurs de la base de données à l'aide du modèle `User`. Nous passons ensuite la variable `$users` à la vue `users.index` en utilisant la méthode `with()`. La variable sera disponible dans la vue sous le nom de `$users`.*

---
- `view()->share()` : cette méthode vous permet de partager une variable avec toutes les vues de votre application. La variable sera disponible dans toutes les vues sous le nom que vous avez spécifié. Voici un exemple :

```php
use Illuminate\\Support\\Facades\\View;

class UserController extends Controller
{
    public function __construct()
    {
        $userCount = User::count();

        View::share('userCount', $userCount);
    }

    public function index()
    {
        return view('users.index');
    }
}
```
*Dans cet exemple, nous récupérons le nombre total d'utilisateurs de la base de données à l'aide du modèle `User`. Nous partageons ensuite la variable `$userCount` avec toutes les vues de l'application en utilisant la méthode `share()`. La variable sera disponible dans toutes les vues sous le nom de `$userCount`.*

---
- `compact()` : cette fonction PHP vous permet de passer un tableau de variables à une vue. Les noms des variables seront utilisés comme clés du tableau. Voici un exemple :

```php
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::all();
        $userCount = User::count();

        return view('users.index', compact('users', 'userCount'));
    }
}
```
*Dans cet exemple, nous récupérons tous les utilisateurs et le nombre total d'utilisateurs de la base de données à l'aide du modèle `User`. Nous passons ensuite les variables `$users` et `$userCount` à la vue `users.index` en utilisant la fonction `compact()`. Les noms des variables seront utilisés comme clés du tableau.*

---
- `withView()` : cette méthode vous permet de passer une variable à une vue depuis un middleware. Voici un exemple :

```php
use Illuminate\\Support\\Facades\\View;

class AddUserCountMiddleware
{
    public function handle($request, Closure $next)
    {
        $userCount = User::count();

        View::withView('userCount', $userCount);

        return $next($request);
    }
}

```

*Dans cet exemple, nous définissons un middleware qui récupère le nombre total d'utilisateurs de la base de données à l'aide du modèle `User`. Nous passons ensuite la variable `$userCount` à toutes les vues de l'application en utilisant la méthode `withView()`. La variable sera disponible dans toutes les vues sous le nom de `$userCount`.*
