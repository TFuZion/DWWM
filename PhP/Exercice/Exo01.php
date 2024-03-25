<?php
// Niveau 1 : 
$lastname = 'Doe';
$firstname = 'John';
$age = 25;
$eMail = 'john.doe25@gmail.com';

echo $lastname, PHP_EOL, $firstname, PHP_EOL, $age, PHP_EOL, $eMail, PHP_EOL;

// Niveau 2 :
$isStudent = rand(true, false);
$favoriteNumber = rand(1, 20);

if ($isStudent == true) {
  echo "Je suis étudiant \net mon chiifre favorie est $favoriteNumber", PHP_EOL;
} else {
  echo "Je ne suis pas étudiant\net mon chiifre favorie est $favoriteNumber", PHP_EOL;
}

// Niveau 3 :
$tableAssociation =  ['lastename' => $lastname, 'firstname' => $firstname, 'age' => $age, 'email' => $eMail, 'isStudent' => $isStudent, 'favoriteNumber' => $favoriteNumber];

foreach ($tableAssociation as $key => $value) {
  echo "$key => $value\n";
}