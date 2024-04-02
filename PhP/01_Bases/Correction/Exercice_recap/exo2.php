<?php
// Niveau 1
$a = rand(1, 50); $b = rand(1, 50);

echo $a + $b.PHP_EOL;
echo $a - $b.PHP_EOL;
echo $a / $b.PHP_EOL;
echo $a * $b.PHP_EOL;

// Niveau 2
$isEven = $a % 2 == 0 ? "Le nombre est pair" : "Le nombre est impair";
echo $a.": ".$isEven;

// Niveau 3
$age1 = rand(10,30); $age2 = rand(10, 30);

if ($age1 >= 18 && $age2 >= 18) {
    echo "Vous pouvez accéder";
} elseif ($age1 >= 25 || $age2 >= 25) {
    echo "Vous pouvez accéder avec un accompagnant";
} else {
    echo "Vous ne pouvez pas accéder.";
}