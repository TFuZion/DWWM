<?php
// Niveau 1
$userAge = readline("Veuillez entrer votre âge: ");
$message = "";

if ($userAge >= 18) {
    $message = "L'utilisateur est majeur";
} else {
    $message = "L'utilisateur est mineur";
}

echo $message.PHP_EOL;

// Niveau 2
$userNb = readline("Veuillez taper un nombre: ");

if ($userNb > 0) {
    $message = "Le nombre est positif";
} elseif ($userNb < 0) {
    $message = "Le nombre est négatif";
} else {
    $message = "Le nombre est nul";
}

echo $message.PHP_EOL;

// Niveau 3
do {
    $userMark = (int)readline("Veuillez taper un nombre entre 0 et 20: ");
    if ($userMark < 0 || $userMark > 20) {
        print("Erreur. La note ne correspond pas\n");
    }
} while ($userMark < 0 || $userMark > 20);

match ($userMark) {
    10, 11 => $message = "Passable",
    12, 13 => $message = "Assez Bien",
    14, 15 => $message = "Bien",
    16, 17 => $message = "Très bien",
    18, 19, 20 => $message = "Excellent",
    default => $message = "Insuffisant"
};

echo "Appreciation: ".$message;