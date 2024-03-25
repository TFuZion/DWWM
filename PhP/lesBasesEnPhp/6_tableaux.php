<?php

$tableau = [1, 2, 3];
$tableau1 = array(4, 5, 6);

$tableauAssociatif = [1 => "un", "deux" => 2, true => 24 ];

echo $tableau[1], PHP_EOL; // 2
echo $tableauAssociatif[true], PHP_EOL; // 24

$tableau[] = 4;
$tableauAssociatif["toto"] = false;


// Destructuration de tableau
// Extrait une valeur dans le tableau
["USERNAME" => $user] = $_SERVER;

// skip les premiers éléments
[,,,$a] = $tableau;
echo $a, PHP_EOL;

// Spread opérateur
$tableau2 = [...$tableau, ...$tableau1];
//print_r($tableau2);

$tabMulti = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

foreach ($tabMulti as $tab) {
    foreach ($tab as $val) {
        echo $val, PHP_EOL;
    }
}
