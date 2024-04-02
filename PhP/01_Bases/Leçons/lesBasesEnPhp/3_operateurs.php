<?php

// Opérateurs arithmétiques

echo 1 + 1, PHP_EOL;
echo 1 - 1, PHP_EOL;
echo 1 / 1, PHP_EOL;
echo 1 * 1, PHP_EOL;
echo 1 ** 1, PHP_EOL;
echo 4 % 2, PHP_EOL; // Modulo: reste d'une division euclidienne

// Opérateurs d'affectation
$monEntier = 1;
$monEntier += 1;
$monEntier -= 1;
$monEntier *= 1;
$monEntier /= 1;

$maChaine = "Hello ";
$maChaine .= "world!";
echo $maChaine, PHP_EOL;

// Opérateurs de comparaisons
var_export(1 == "1");
echo PHP_EOL;

var_export(1 === "1");
echo PHP_EOL;

var_export(1 > 2);
echo PHP_EOL;

var_export(1 >= 2);
echo PHP_EOL;

var_export(1 != "1");
echo PHP_EOL;

var_export(1 !== "1");
echo PHP_EOL;

// Opérateurs d'incrémentation

$compteur = 0;

$compteur++; // Incrémente la valeur de 1.
$compteur--; // Décrémente la valeur de 1.

++$compteur;
--$compteur;

// OU
$resultat = true || false; //true
var_export($resultat);

echo PHP_EOL;

// ET
$resultat = false && true; // false
var_export($resultat);





