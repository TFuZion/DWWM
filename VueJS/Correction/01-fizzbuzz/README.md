# Exercice 01

Réaliser, via le framework Vue.js, un compteur FizzBuzz

Vous devrez respecter les règles du FizzBuzz qui sont les suivantes: 

* Si le nombre est un multiple de 3, on affiche 'Fizz'
* Si le nombre est un multiple de 5, on affiche 'Buzz'
* Si le nombre est un multiple de 3 et de 5, on affiche 'FizzBuzz'
* Si le nombre est un nombre quelconque, on affiche seulement la valeur du nombre

Pour cela, vous ferez un composant FizzBuzz qui contiendra un span et deux boutons. 
* Le span devra afficher, via une propriété de type `computed`, la valeur du compteur en version FizzBuzz
* Un bouton pour incrémenter la valeur du compteur
* Un bouton pour décrémenter la valeur du compteur

Il faudra empêcher l'utilisateur d'avoir une valeur inférieure à 0 via un v-on:disabled se basant sur soit une valeur computed, soit directement sur la valeur du compteur.

Pour la valeur du compteur, pensez à faire usage d'une variable réactive via `ref()`