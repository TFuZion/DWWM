### Création d'un formulaire de contact avec Laravel

Dans cet exercice, vous allez créer un formulaire de contact simple avec Laravel. Vous allez créer une route pour afficher le formulaire, une route pour envoyer le formulaire et une route pour afficher le message de confirmation.

### Étape 1 : Création des routes

Dans le fichier `routes/web.php`, créez les routes suivantes :

- Une route `GET` pour afficher le formulaire de contact à l'URI `/contact`. Cette route doit utiliser le contrôleur `ContactController@create`.
- Une route `POST` pour envoyer le formulaire de contact à l'URI `/contact`. Cette route doit utiliser le contrôleur `ContactController@store`.
- Une route `GET` pour afficher le message de confirmation à l'URI `/contact/thanks`. Cette route doit utiliser le contrôleur `ContactController@thanks`.

### Étape 2 : Création du contrôleur

Créez un contrôleur `ContactController` dans le répertoire `app/Http/Controllers`. Ce contrôleur doit contenir les méthodes suivantes :

- `create()` : cette méthode doit afficher la vue `contact.create`.
- `store(Request $request)` : cette méthode doit récupérer les données envoyées par le formulaire de contact et les valider. Si les données sont valides, l'utilisateur doit être redirigé vers la route `/contact/thanks`. Si les données ne sont pas valides, l'utilisateur doit être redirigé vers la route `/contact` avec les erreurs de validation.
- `thanks()` : cette méthode doit afficher la vue `contact.thanks`.

### Étape 3 : Création des vues

Créez les vues suivantes dans le répertoire `resources/views` :

- `contact.create` : cette vue doit afficher le formulaire de contact avec les champs suivants : nom, adresse e-mail, objet et message. Le formulaire doit envoyer une requête `POST` à l'URI `/contact`.
- `contact.thanks` : cette vue doit afficher un message de confirmation indiquant que le formulaire a été envoyé avec succès.

### Étape 4 : Création des migrations et des modèles

Dans cette étape, vous allez créer une migration pour la table de la base de données qui stockera les messages de contact et un modèle pour interagir avec cette table.

#### Création de la migration

Pour créer une migration, utilisez la commande suivante dans votre terminal :

```lua
php artisan make:migration create_contact_messages_table --create=contact_messages

```

Cette commande va créer un fichier de migration dans le répertoire `database/migrations`. Ouvrez ce fichier et ajoutez les colonnes nécessaires pour stocker les informations de contact dans la méthode `up()`. Assurez-vous d'inclure des colonnes pour le nom, l'adresse e-mail, l'objet et le message.

#### Création du modèle

Ensuite, créez un modèle `ContactMessage` pour interagir avec la table `contact_messages`. Utilisez la commande suivante dans votre terminal :

```go
php artisan make:model ContactMessage

```

Cette commande va créer un fichier `ContactMessage.php` dans le répertoire `app/Models`. Ouvrez ce fichier et définissez les propriétés et les relations nécessaires pour interagir avec la table `contact_messages`.

#### Mise à jour du contrôleur

Enfin, mettez à jour la méthode `store()` du contrôleur `ContactController` pour enregistrer les données du formulaire dans la base de données en utilisant le modèle `ContactMessage`. Assurez-vous de valider les données avant de les enregistrer.