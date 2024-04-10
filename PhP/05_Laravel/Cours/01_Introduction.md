# Introduction

Laravel est un framework PHP open-source créé par Taylor Otwell en 2011. Il est conçu pour faciliter le développement d'applications web en utilisant le modèle MVC (Model-View-Controller) et orienté objet.

## Caractéristiques de Laravel

1. Système de routage simple et expressif

Laravel fournit un système de routage simple et expressif qui permet de définir facilement les routes de l'application et de les associer à des contrôleurs. Les routes peuvent être définies dans un fichier de configuration ou dans des fichiers de routes séparés pour une meilleure organisation.

1. Système de modèles

Laravel fournit un système de modèles “éloquent” qui permet de travailler avec les bases de données de manière simple et intuitive. Eloquent est un ORM (Object-Relational Mapping) fourni avec Laravel. Il permet de travailler avec les bases de données en utilisant des objets PHP plutôt que d'écrire des requêtes SQL brutes. Eloquent prend en charge plusieurs systèmes de gestion de bases de données, notamment MySQL, PostgreSQL, SQLite et SQL Server.

1. Système de vues

Laravel fournit un système de vues qui permet de séparer la logique de l'application de la présentation. Les vues peuvent être créées à l'aide de différents moteurs de templates tels que Blade, qui est fourni avec Laravel.

1. Système de migration de base de données

Laravel fournit un système de migration de base de données qui permet de gérer facilement les schémas de base de données. Les migrations permettent de créer, de modifier et de supprimer des tables de la base de données de manière simple et efficace.

1. Système d'authentification

Laravel fournit un système d'authentification prêt à l'emploi qui permet de gérer facilement l'authentification et l'autorisation des utilisateurs.

1. Système de tests

Laravel fournit un système de tests intégré qui permet de tester facilement les fonctionnalités de l'application. Les tests peuvent être écrits à l'aide de PHPUnit, qui est fourni avec Laravel.

## Utilisation

Avant de créer votre premier projet Laravel, assurez-vous que votre machine locale dispose de PHP et de Composer. Si vous développez sur macOS ou Windows, vous pouvez installer PHP et Composer en quelques minutes via Laravel Herd. Il est généralement recommandé d'installer également Node et NPM.

Une fois que vous avez installé PHP et Composer, vous pouvez créer un nouveau projet Laravel en utilisant la commande create-project de Composer :

```css
composer create-project laravel/laravel example-app
```

Ou, vous pouvez créer de nouveaux projets Laravel en installant globalement l'installateur Laravel via Composer :

```
composer global require laravel/installer

laravel new example-app

```

Une fois le projet créé, démarrez le serveur de développement local de Laravel en utilisant la commande serve de Laravel Artisan :

```bash
cd example-app

php artisan serve

```

Une fois que vous avez démarré le serveur de développement Artisan, votre application sera accessible dans votre navigateur web à l'adresse [http://localhost:8000](http://localhost:8000/).