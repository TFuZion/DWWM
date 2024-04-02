<?php

$message = "Hello World";
function helloWorld(string $message) : string
{
    return print($message);
}

//helloWorld($message);

function soustraire(int $a, int $b) : int
{
    echo __FUNCTION__, PHP_EOL;
    return $a - $b;
}

//echo soustraire(10, 5);

// Passage du paramètre par référence: &

$a = 10;

function parReference(int &$nombre) : int {
    $nombre += 10;
    return $nombre;
}

//echo "resultat: ", parReference($a), PHP_EOL;
//echo $a;

// Paramètres par défaut
// Attention: Il faut toujours placer les paramètres par défaut après les paramètres obligatoires.

function bonjourPrenom(string $prenom = "Benoit"): void {
    echo "Bonjour $prenom";
}

bonjourPrenom();

function sayHelloToManyPeople(string ...$prenoms): void {
    $hello = "Bonjour";
    foreach ($prenoms as $prenom) {
        $hello .= " $prenom ";
    }
    echo $hello, PHP_EOL;
}

sayHelloToManyPeople("Toto", "Tata", "Titi");

$tab = [1, 2];
echo soustraire(...$tab);

