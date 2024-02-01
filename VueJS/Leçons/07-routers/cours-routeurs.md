# Présentation de Vue-Router

Vue Routeur est un routeur officiel pour les applications Vue.js. Il permet de gérer la navigation dans une application web à page unique (SPA). Concrètement, cela signifie qu'il permet de définir des routes pour différents états de l'application et de naviguer entre eux sans recharger la page entière.  
Dans une application Vue.js, chaque "page" peut être représentée par un composant Vue distinct. Vue Router permet de mapper ces composants à des URL spécifiques, facilitant ainsi la navigation dans l'application. Par exemple, vous pouvez définir une route `/accueil` qui affiche le composant `Accueil`, et une deuxième route `/profil` qui affiche le composant `Profil`.

## Installation et configuration de Vue Router

Pour installer Vue Router, vous pouvez utiliser npm (Node Package Manager). Voici les étapes générales:

1. Assurez-vous d'avoir un projet Vue.js ou créez en avec Vue CLI.

2. Installez Vue Router en exécutant la commande suivante

```bash
npm install vue-router
```

3. Importez Vue Router dans votre application et utilisez-le pour définir vos routes.

### Vue Router 3 VS Vue Router 4

Vue Router 4 est la dernière version majeure de Vue Router, appotant plusieurs améliorations et de nouvelles fonctionnalités par rapport aux versions précédentes. Voici quelques différences et avantages de Vue Router 4:

1. **Composition API:** Vue Router 4 s'appuie sur la Composition API, offrant une syntaxe plus expressive et flexible pour la configuration des routes et la gestion de la navigation.

2. **Meilleure performance:** Vue Router 4 a été optimisé pour améliorer les performances de navigation, notamment en réduisatn le temps de chargement des routes et en optimisant la mémoire.

3. **Meilleure gestion des transitions:** Vue Router 4 propose de nouvelles options pour la gestion des transitions de page, offrant plus de contrôle et de personnalisation sur l'animation entre les routes.

4. **Compatibilité avec Vue 3:** Vue Router 4 est entièrement compatible avec Vue.js 3, ce qui en fait un choix idéal pour toute nouvelle application.

## Configuration des routes.

Dans Vue Router, les routes sont définies à l'aide de l'objet `routes`. Chaque route est représentée par un objet avec plusieurs propriétés, telle que `path` (le chemin de l'URL), `component` (le composant à afficher lorsque cette route est activée) et éventuellement d'autres options comme `props`, `meta`, etc.

Voici un exemple de définition de routes dans Vue Router

```js
import { createRouter, createWebHistory } from `vue-router`;
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

const routes = [
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/contact", component: Contact},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
```
Dans cet exemple, nous définissons trois routes principales: une route pour la page d'accueil (/), une route pour la page "A propos" (/about) et une route pour la page de contact (/contact).  
Chaque route est associée à un composant spécifique qui sera affiché lorsque la route correspondante est activée.

## Utilisation de router-link pour créer des liens de navigation dans les composants:

La balise `<router-link>` est utilisée dans les composants Vue.js pour créer des liens de navigation vers différentes routes de l'application. Elle se traduit par un élément `<a>` HTML dans le navigaeur, mais elle prend en charge la navigation sans rechargement de page.

Voici un exemple d'utilisation de `<router-link>` dans un composant Vue:

```vue
<template>
    <div>
        <router-link to="/">Accueil</router-link>
        <router-link to="/about">A propos</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>
</template>
```

## Configuration de routes dynamiques avec des paramètres d'URL

Les routes dynamiques avec des paramètres d'URL permettent de définir des routes avec des parties variables dans l'URL. Ces paramètres peuvent être utilisés pour récupérer des données spécifiques dans les composants associés à ces routes.
Voici un exemple de configuration d'une route dynamique avec un paramètre d'URL dans Vue Router

```js
const routes = [
    {path: '/produit/:id', component: ProductDetail}
    ]
```
Dans cet exemple, la route `/produit/:id` définit un paramètre d'URL dynamique appelé `id`.  
Lorsque cette route est activée avec une URL comme `/produit/123`, le composant `ProductDetail` sera affiché, et le paramètre `id` sera disponible dans ce composant pour récupérer et afficher les détails du produit avec l'ID correspondant.

