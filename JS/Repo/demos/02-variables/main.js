// Déclaration d'une variable
let prenom = "Arthur";

// Le JavaScript est sensible à la casse !
let Prenom = "Michelle";

console.log(prenom);

// On réaffecte une nouvelle valeur
prenom = "Jean";

console.log(prenom, Prenom);

console.log(prenom);

// const permet de déclarer une valeur qui ne pourra être affectée qu'une seule fois
const PI = 3.14;

// erreur !
// PI = 3.141592;

// Préférer let ou const !
var chien = "Rex";

// Déclarer une variable sans la définir : undefined
let maVariableUndefined;

console.log(12, typeof 12);
console.log("Hello", typeof "Hello");
console.log("true", typeof true);
console.log("{}" ,typeof {});
console.log("null",typeof null);
console.log("maVariableUndefined", typeof maVariableUndefined);

// Commentaire sur une ligne

/*
commentaire
multi-lignes
*/

// Lire les entrées depuis le navigateur avec prompt
let maValeur = prompt("Saisir une valeur");
alert(maValeur);

// Les différents types de chaînes de caractères
let premiereChaine = "hello";

console.log(premiereChaine);

let secondeChaine = 'world';

console.log(secondeChaine);

// String interpolation
// backtick : ALT GR + 7
let troisièmeChaine = `Hello ${prenom}`;

console.log(troisièmeChaine);

// Préférer l'interpolation de chaînes !
let concat = "Hello " + prenom;