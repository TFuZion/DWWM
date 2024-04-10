# Composer

Composer est un gestionnaire de dépendances pour PHP. Il nous permettra de gérer efficacement
les bibliothèques (libraries) et les packages nécessaires à un projet PHP.

## Fonctionnalités

- `Gestion des dépendances` : Composer permet de déclarer les dépendances nécessaires à un projet
- grâce à un fichier `composer.json`. Il se charge ensuite de télécharger et d'installer
automatiquement les bibliothèques nécessaires.
- `Autoloading`: Composer fournit un mécanisme d'autoloading pour charger automatiquement
les classes PHP à partir des bibliothèques installées. Cela évite d'avoir à inclure manuellement les fichiers de code source dans le code.
- `Gestion des versions`: Composer permet de spécifier les versions des bibliothèques à utiliser dans un projet. Il prend en charge les contraintes de version et les mises à jour automatiques.
- `Publication de bibliothèques`: Composer permet de publier facilement de bibliothèques PHP sur le répertoire Packagist.

## Autoloading

L'autochargement des classes en PHP (ou autoloading) est une technique qui permet de charger automatiquement les fichiers de code source des classes PHP lorsqu'elles sont utilisées dans le code. Cela évite d'avoir à inclure manuellement les fichiers de code source dans le code.

Composer fournit un mécanisme d'autochargement des classes très simple à utiliser. Voici comment l'utiliser :

1. Définir l'autoloading dans le fichier `composer.json` : Dans le fichier `composer.json`, il est possible de définir les répertoires et les fichiers à charger automatiquement à l'aide de la section `autoload`. Voici un exemple :

```json
{
    "autoload": {
        "psr-4": {
            "MonNamespace\\\\": "src/"
        }
    }
}

```

Dans cet exemple, nous avons défini un namespace `MonNamespace` qui correspond au répertoire `src/`. Toutes les classes PHP situées dans ce répertoire et ses sous-répertoires seront automatiquement chargées lorsqu'elles seront utilisées dans le code.

1. Générer le fichier `vendor/autoload.php` : Une fois le fichier `composer.json` configuré, il suffit d'exécuter la commande `composer dump-autoload` pour générer le fichier `vendor/autoload.php`. Ce fichier contient le code nécessaire à l'autochargement des classes.
2. Inclure le fichier `vendor/autoload.php` dans le code : Pour utiliser l'autochargement des classes, il suffit d'inclure le fichier `vendor/autoload.php` dans le code. Voici un exemple :

```php
<?php
require_once 'vendor/autoload.php';

use MonNamespace\\MaClasse;

$objet = new MaClasse();
// ...

```

Dans cet exemple, nous avons inclus le fichier `vendor/autoload.php` à l'aide de la fonction `require_once()`. Nous avons ensuite utilisé le mot-clé `use` pour importer la classe `MaClasse` depuis le namespace `MonNamespace`. Enfin, nous avons créé un objet de la classe `MaClasse`.

Voici une démo complète de l'utilisation de l'autochargement des classes avec Composer :

1. Créer un nouveau répertoire pour le projet et se placer dedans dans le terminal.
2. Créer un fichier `composer.json` avec le contenu suivant :

```json
{
    "autoload": {
        "psr-4": {
            "MonNamespace\\\\": "src/"
        }
    }
}

```

1. Créer un répertoire `src` et un fichier `MaClasse.php` dedans avec le contenu suivant :

```php
<?php
namespace MonNamespace;

class MaClasse {
    public function direBonjour() {
        echo "Bonjour !\\n";
    }
}

```

1. Exécuter la commande `composer dump-autoload` pour générer le fichier `vendor/autoload.php`.
2. Créer un fichier `index.php` avec le contenu suivant :

```php
<?php
require_once 'vendor/autoload.php';

use MonNamespace\\MaClasse;

$objet = new MaClasse();
$objet->direBonjour();

```

1. Exécuter le fichier `index.php` avec la commande `php index.php`. Le message "Bonjour !" devrait s'afficher dans la console.