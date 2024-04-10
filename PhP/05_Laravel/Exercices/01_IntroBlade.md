# Introduction Blade

1. Créez une nouvelle vue Blade appelée `welcome.blade.php` dans le répertoire `resources/views` de votre projet Laravel.
2. Dans cette vue, affichez un titre de niveau 1 (`<h1>`) contenant le texte "Bienvenue sur mon site".
3. Affichez une liste non ordonnée (`<ul>`) contenant les éléments "Accueil", "À propos" et "Contact". Pour chaque élément de la liste, utilisez la directive Blade `@foreach` pour itérer sur un tableau PHP contenant les noms des pages.
4. Créez une nouvelle vue Blade appelée `layout.blade.php` dans le répertoire `resources/views/layouts` de votre projet Laravel.
5. Dans cette vue, définissez une mise en page HTML de base avec un en-tête (`<header>`) et un pied de page (`<footer>`) communs à toutes les pages de votre site. Dans l'en-tête, affichez le nom de votre site en utilisant la directive Blade `@yield` pour insérer le contenu dynamique de la section "title" de chaque page. Dans le pied de page, affichez un lien vers votre page de contact en utilisant la directive Blade `@`.
6. Dans la vue `welcome.blade.php`, étendez la mise en page définie dans `layout.blade.php` en utilisant la directive Blade `@extends`.
7. Dans la vue `welcome.blade.php`, définissez une section "title" en utilisant la directive Blade `@section` et insérez-y le titre de la page.
8. Dans la vue `welcome.blade.php`, définissez une section "content" en utilisant la directive Blade `@section` et insérez-y le contenu principal de la page (le titre de niveau 1 et la liste non ordonnée).
9. Dans la vue `layout.blade.php`, insérez le contenu de la section "title" définie dans chaque page en utilisant la directive Blade `@yield`.
10. Dans la vue `layout.blade.php`, insérez le contenu de la section "content" définie dans chaque page en utilisant la directive Blade `@yield`.