<?php
// Niveau 1 :
$a = 6;
$b = 4;

$result = $a + $b;
echo $result, PHP_EOL;
$result = $a - $b;
echo $result, PHP_EOL;
$result = $a / $b;
echo $result, PHP_EOL;
$result = $a * $b;
echo $result, PHP_EOL;
$result = $a ** $b;
echo $result, PHP_EOL;
$result = $a % $b;
echo $result, PHP_EOL;

// Niveau 2 :
$random = rand(1, 100);
$isEven = $random % 2 ==0 ? "le chiffre $random est pair" : "le chiffre $random est impaire";
echo $isEven, PHP_EOL;

// Niveau 3 :
$age1 = rand(10, 50);
$age2 = rand(10, 50);

if ($age1 >= 18 && $age2 >= 18) {
  echo "Vous pouvez passer";
} elseif (($age1 < 18 || $age2 < 18) && ($age1 >= 25 || $age2 >= 25)) {
  echo "Vous pouvez passer";
} else {
  echo "Vous ne pouvez pas passer";
}

