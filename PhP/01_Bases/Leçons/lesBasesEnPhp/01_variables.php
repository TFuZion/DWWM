<?php

// Commentaire sur une ligne (c)
# Commentaire sur une ligne (bash)

/*
 * Commentaire
 * multi-lignes
 */

// Affichage de texte
//syntaxe à privilégier
echo "hello ";

echo ("world\n");

// Déclaration de variables (string, num, boolean)
// Chaine de caractères
$variable = "\tmaVariable\n";
// Nombre entier
$myNumber = 10;
// Nombre à virgules (float)
$myFloatNumber = 10.5;
// Booléen
$myBoolean = true;

// affichage de la variable
echo $variable;

// Passage à la ligne
echo PHP_EOL;

// On peut également déclarer des constantes
const myConst = "Ceci est une constante\n";
// Ancienne syntaxe, déconseillée
define("IS_ACTIVE", true);
echo myConst;
echo IS_ACTIVE;

// echo concatène les chaînes passées en paramètres
$hello = "Hello ";
$world = "world";
echo PHP_EOL, $hello, $world, PHP_EOL;

// gettype retourne le type d'une variable
echo "Type de mon booléen: ", gettype($myBoolean), PHP_EOL;

// La fonction print() permet d'afficher le contenu d'une variable contrairement à echo qui est une instruction de langage
print ($variable);
echo PHP_EOL;
$

  // Readline permet de lire des informations depuis la console.
// Elle prend en paramètre une chaîne de caractère à afficher.
// flush();
  $first_name = readline("Veuillez entrer votre prénom");
echo $first_name;

// Permet de convertir une chaîne de caractère en entier
$age = (int) readline("Saisir un âge: ");
echo gettype($age);

// Chaînes de caractères

$pseudo = "darkbenoit666";

// Les chaînes de caractères en single quotes n'interprètent pas les caractères spéciaux
$motdepasse = 'topsecret\n';

// L'opérateur "." permet de concaténer des chaînes
echo $pseudo . ":" . $motdepasse;

// Interpolation
echo "pseudo: $pseudo mdp: $motdepasse";

// Il est possible de détruire une variable
unset($variable);

echo PHP_VERSION;