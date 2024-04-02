<?php
// Niveau 1
for ($i = 1; $i <= 10; $i++) {
    echo $i." ";
}

// Niveau 2
$compteur = 0;
$sum = 0;

while ($compteur < 100) {
    if ($compteur % 2 == 0) {
        $sum += $compteur;
    }
    $compteur++;
}

echo "\nTotal: ".$sum.PHP_EOL;

// Niveau 3
$tabPrenoms = ["Kevin", "Silvio", "Arthur", "John"];
$letter = "a";
$found = false;


foreach ($tabPrenoms as $val) {
    for ($i = 0; $i < strlen($val); $i++) {
        if (strtolower($val[$i]) === $letter) {
            $found = true;
            break;
        }
    }
    if ($found) {
        echo "Le prénom $val contient la lettre $letter\n";
    } else {
        echo "Le prénom $val ne contient pas la lettre $letter\n";
    }
    $found = false;
}



