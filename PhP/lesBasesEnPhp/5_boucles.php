<?php

$prenom = readline("Saisir un prénom: ");

// On utilise la boucle while quand on ne sait pas d'avance le nombre d'itérations à effectuer

while ($prenom !== "BenoitDeCoco") {
    echo "Erreur. Je veux un plus beau prénom\n";
    $prenom = readline("Saisir un prénom: ");
}

// for (compteur; condition; pas)

for ($compteur=1; $compteur <= 10; $compteur++) {
    echo $compteur, PHP_EOL;
}

for ($compteur=10; $compteur > 0; $compteur--) {
    echo $compteur, PHP_EOL;
}

do {
    $saisie = readline("Saisir une lettre: ");
} while($saisie !== "a");

$tableau = [10, 11, 12];

foreach ($tableau as $element) {
    echo $element, PHP_EOL;
}

for ($compteur = 0; $compteur < count($tableau); $compteur++) {
    echo $tableau[$compteur], PHP_EOL;
}

$tableauAssociatif = ["un" => 1, "deux" => 2];
echo $tableauAssociatif["deux"];

// Parcourir un tableau associatif
foreach ($tableauAssociatif as $key => $value) {
    echo "$key => $value\n";
}

