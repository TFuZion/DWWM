<?php
// Niveau 1
$first_name = "Benoit"; $last_name = "Lecoeuvre"; $age = 31; $mail = "benoit@utopios.solutions";

echo "Je m'appelle $first_name $last_name, j'ai $age ans. Mon mail est $mail \n";
echo "Je m'appelle ", $first_name, " ", $last_name, PHP_EOL;
echo "Je m'appelle ".$first_name." ".$last_name.PHP_EOL;

// Niveau 2
$isStudent = rand(true, false);
$favoriteNumber = rand(1, 50);

$message = $isStudent ?  "Vous êtes étudiant" : "Vous n'êtes pas étudiant";
$message .= " et votre nombre favori est $favoriteNumber\n";
echo $message;

// Niveau 3
$tableau = ["first_name" => $first_name, "last_name" => $last_name, "age" => $age, "mail" => $mail, "isStudent" => $isStudent, "favoriteNumber" => $favoriteNumber];

foreach ($tableau as $key => $val) {
    echo $key.": ".$val.PHP_EOL;
}