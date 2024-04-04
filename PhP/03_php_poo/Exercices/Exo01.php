<?php

function Story(): void
{
    echo  "Vous êtes un explorateur dans une forêt ancienne à la recherche d''un trésor perdu. Au cours de votre aventure, vous rencontrez divers défis et faites des choix qui influenceront votre capacité à trouver le trésor.", PHP_EOL;
    echo  "Vous vous tenez à l'entrée d'une forêt ancienne. Un trésor légendaire est dit être caché quelque part à l'intérieur. Voulez-vous entrer ?" , PHP_EOL;
    firstIf();
}
function firstIf(): void
{
    $response = readline("(oui/non)");
    if ($response === "oui") {
        echo "Deux chemins s'offre à vous : \nLe premier chemin semble long mais moins difficile d'accès\nContrairement au second qui semble synistre mais beaucoup plus rapide\n";
        echo "Quel choix voulez vous faire ? Le premier chemin où le second ?", PHP_EOL;
        secondIf();
    } elseif ($response === "non") {
        echo "L'aventure fû courte mais intense dommage peut-être demain...";
    } else echo "erreur lors du choix";
};

function secondIf(): void
{
    $response2 = readline("(1/2)");
    if ($response2 == 1) {
        echo "Vous arrivez face à un labirynthe, celui ne semble pas piégé mais vous risquez de perdre beaucoup de temps\nSouhaitez vous y entrer ?", PHP_EOL;
        thirdIf();
    } elseif ($response2 == 2) {
        echo "Un amât de ronce se dresse devant vous celui semble traversemble mais pas sans egratinure.\nCependant vous avez le choix de prendre un chemin, sur le coté, très marécageux on ne sais pas ce qui si cache mais il semble plus sûr", PHP_EOL;
        thirdIfBis();
    } else echo "erreur lors du choix";
}

function thirdIf(): void
{
    $response3 = readline("(oui/non)");
    if ($response3 === "oui") {
        echo "Après 4h dans ce labirynthe, vous voici arrivez à ce qui semble être une salle au trésor. Vous y trouverez un petit trésor celui-ci vous satisfait et vous semblez en avoir assez pour la journée. Vous rebrousez chemin mais pas les mains vides félicitations...!";
    } elseif ($response3 === "non") {
        echo "Vous avez raison on peut facilement se perdre et rester des heures dans ce labirynthe. Rentrez chez vous il vaut mieux...";
    } else echo "erreur lors du choix";
}

function  thirdIfBis(): void
{
    $response3 =readline("ronce ou marécage ?");
    if ($response3 === "ronce") {
        echo "Vous parvenez a vous immicer à trvaers les ronces mais pas sans difficulté, vous êtes afaiblie.\n Vous arrivez au porte d'un petit batîment. Vous entrez dans celui ci et 4 porte s'ouvre a vous", PHP_EOL;
        lastChoice();
    } elseif ($response3 === "marécage") {
        echo "Des crocodiles se terraient dans le marécage, ils vous détectent et vous chassent de leur marécage. Par peur vous courez tellment que vous retouvez l'entrer de la fôret. \nVous en avez assez fait pour aujourd'hui le trésor sera peut-être pour demain...", PHP_EOL;
    } else echo "erreur lors du choix";
}

function lastChoice() : void
{
    $dor = (int)readline("(1/2/3/4)");

    match ($dor) {
        1 => $message = "La porte une ne mène à rien",
        2 => $message = "Le lutin farfelue se cache derrière la porte. Il vous vole votre monnaie et part en courant.",
        3 => $message = "La porte est bloqué",
        4 => $message = "un bon trésor se cache derrière cette porte vous l'emportez et repartez victorieux, felicitation...!"
    };
    echo $message;

}

Story();