# Exercice 04

Réaliser une application Vue.js permettant à un utilisateur de stocker des données d'un type de votre choix

Pour cela, vous devrez utiliser deux composants:
* Un composant de formulaire d'ajout qui permettra la saisie des informations utilisateur nécessaire à votre type de données. Lors de l'envoi du formulaire, ce composant **émettra un évènement** (`emits`) du nom de votre choix qui portera en données les informations de l'objet de données. Une fois l'évènement émit, les informations du formulaire seront remises à zéro.
* Un composant permettant, en recevant en `props` un objet du type de données choisi, d'afficher les informations de cet objet via un style particulier. 
* L'ensemble des informations sera mit en commun via le composant parent `App.vue` qui devra contenir le tableau des éléments, traiter l'évènement d'ajout d'une entité et provoquer via une directive `v-for` l'affichage des X composants d'affichage

---

BONUS : 
* Faire en sorte que le design des composant d'affichage soit alterné entre les éléments pairs et impairs
* Faire de la validation en temps réel des champs utilisateur du formulaire et afficher des messages d'erreurs / changer le design des input en temps réel