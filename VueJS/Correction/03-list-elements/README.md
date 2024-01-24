# Exercice 03

Réaliser une application avec Vue.js

Cette application devra permettre à un utilisateur d'ajouter, de voir et de supprimer un élément de données de votre choix (si pas d'idées, faites une liste de contacts). 

L'ajout des éléments passera par un formulaire d'ajout qui devra comprendre au minimum 4 champs (nom, prenom, email et numéro de téléphone pour un contact, encore une fois si pas d'idée). 

L'affichage des éléments se fera dans un tableau HTML (`<table>`). Chaque ligne devra comprendre l'ensemble des informations de la données ainsi qu'un bouton permettant la suppression. 

Lors de l'appui sur le bouton supprimer, il y aura appel d'une fonction qui causera le retrait dans le tableau d'éléments de l'élément que l'utilisateur veut supprimer. 

<hr />

## Indices

* Le tableau d'élémens doit être créé via l'utilisation de la fonction `reactive()`
* Les éléments de données seront des objets avec des attributs en fonction de ceux que vous désirez
* Pour générer les lignes du tableau, pensez à utiliser la directive `v-for`
* Pour la suppression, pensez à passer en paramètre soit l'id de l'élément, soit l'élément entier que vous souhaitez retirer de la liste