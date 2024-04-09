<?php

$notes = [12, 15, 6, 17, 7];
function calculMoyenne($notes)
{
  if (count($notes) == 0) {
    throw new Exception("Le tableau de notes ne peut pas être vide\n");
  }
  $moyenne = array_sum($notes) / count($notes);
  echo "la moyenne des notes est de $moyenne";
}

try {
  calculMoyenne($notes);
} catch (Exception $e) {
  if ($e->getMessage() == "Le tableau de notes ne peut pas être vide") {
    echo "Erreur : Le tableau de notes est vide\n";
  }
  echo "Une erreur s'est produite :", $e->getMessage();
}
