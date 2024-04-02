<?php
// Niveau 1 :
for ($x = 1; $x <= 10; $x++) {
  echo $x, " ";
}

// Niveau 2 :
$result = 0;
$y = 0;
while ($y <= 100) {
  if ($y % 2 == 0) {
    $result += $y;
  }
  $y++;
}
echo PHP_EOL, $result, PHP_EOL;

// Niveau 3 :
$listName = ["hugo", "martine", "roland", "marine", "Antoine"];
foreach ($listName as $item) {
  if (str_contains(strtolower($item), 'a')) {
    echo "$item contient la lettre a dans son prénom", PHP_EOL;
  }
}