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