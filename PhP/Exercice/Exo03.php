<?php
// Niveau 1 :
$userAge = readline("Saisissez votre age : ");
if ($userAge >= 18) {
  echo "tu es majeur", PHP_EOL;
} else {
  echo "tu es mineur", PHP_EOL;
}

// Niveau 2 :
$userNumber = readline("Saississez un nombre : ");
if ($userNumber > 0) {
  echo "le nombre est positif", PHP_EOL;
} elseif ($userNumber < 0) {
  echo "le nombre est négatif", PHP_EOL;
} else {
  echo "error valeur null", PHP_EOL;
}

// Niveau 3 :
$userNote = readline("Saisissez un nombre entre 0 et 20 : ");
$message = "";

while ($userNote < 0 || $userNote > 20) {
  echo "erreur lors de la saisie", PHP_EOL;
  $userNote = readline("Saisissez un nombre entre 0 et 20 : ");
}

$message = match(true) {
  $userNote <= 9 && $userNote >= 0 => "Insuffisant",
  $userNote >= 10 && $userNote <= 11 => "Passable",
  $userNote >= 12 && $userNote <= 13 => "Assez bien",
  $userNote >= 14 && $userNote <= 15 => "Bien",
  $userNote >= 16 && $userNote <= 17 => "Très bien",
  $userNote >= 18 && $userNote <= 20 => "Excellent",
};


echo PHP_EOL, $message;