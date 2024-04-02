<?php

const DATE_PATTERN = "/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/";

$db = new PDO("mysql:host=127.0.0.1;dbname=exo02_commande;", "root", "");


function createClient(PDO $db): bool {
    $firstname = readline("Prénom du client : ");

    if (empty($firstname)) {
        echo "Prénom incorrect";
        return false;
    }

    $lastname = readline("Nom du client : ");

    if (empty($lastname)) {
        echo "Nom incorrect";
        return false;
    }

    $address = readline("Adresse du client : ");

    if (empty($address)) {
        echo "Adresse incorrecte";
        return false;
    }

    $code_postal = readline("Code postal du client : ");

    if (empty($code_postal)) {
        echo "Code postal incorrect";
        return false;
    }

    $city = readline("Ville du client : ");

    if (empty($city)) {
        echo "Ville incorrecte";
        return false;
    }

    $phone_number = readline("N° de Tel du client : ");

    if (empty($phone_number)) {
        echo "N° de tel incorrect";
        return false;
    }


    $requestAddClient = "INSERT INTO client (firstname, lastname, address, code_postal, city, phone_number ) VALUES (:firstname, :lastname, :address, :code_postal, :city, :phone_number)";

    $statement = $db->prepare($requestAddClient);

    $statement->bindValue("firstname", $firstname);
    $statement->bindValue("lastname", $lastname);
    $statement->bindValue("address", $address);
    $statement->bindValue("code_postal", $code_postal);
    $statement->bindValue("city", $city);
    $statement->bindValue("phone_number", $phone_number);
    $statement->execute();

    return $statement->rowCount() === 1;
}

function showClient(PDO $db): void
{
    $request = "SELECT * FROM client ORDER BY lastname, firstname";
    $statement = $db->prepare($request);
    $statement->execute();
    $clients = $statement->fetchAll(PDO::FETCH_ASSOC);

    foreach ($clients as $client) {
        echo json_encode($client). PHP_EOL;
    }

}

function getOneClientById(PDO $db, int $id): array|false
{
    $request = "SELECT * FROM client WHERE id=:id;";
    $statement = $db->prepare($request);
    $statement->execute(["id" => $id]);

    return $statement->fetch(PDO::FETCH_ASSOC);
}
function editClient(PDO $db): void
{
    $id = (int)readline("Saisir l'id du client : ");
    $client = getOneClientById($db, $id);

    if (!$client) {
        echo "Aucun client trouvé avec l'id {$id}";
        return;
    }

    $firstname = readline("Prénom du client : ");

    if (empty($firstname)) {
        $firstname = $client["firstname"];
    }

    $lastname = readline("Nom du client : ");

    if (empty($lastname)) {
        $lastname = $client["lastname"];
    }

    $address = readline("Adresse du client : ");

    if (empty($address)) {
        $address = $client["address"];
    }

    $code_postal = readline("Code postal du client : ");

    if (empty($code_postal)) {
        $code_postal = $client["code_postal"];
    }

    $city = readline("Ville du client : ");

    if (empty($city)) {
        $city = $client["city"];
    }

    $phone_number = readline("N° de Tel du client : ");

    if (empty($phone_number)) {
        $phone_number = $client["phone_number"];
    }

    $requestEditClient = "UPDATE client SET firstname=:firstname, lastname=:lastname, address=:address, code_postal=:code_postal, city=:city, phone_number=:phone_number WHERE id=:id;";

    $statement = $db->prepare($requestEditClient);

    $statement->bindValue("firstname", $firstname);
    $statement->bindValue("lastname", $lastname);
    $statement->bindValue("address", $address);
    $statement->bindValue("code_postal", $code_postal);
    $statement->bindValue("city", $city);
    $statement->bindValue("phone_number", $phone_number);
    $statement->bindValue("id", $id);
    $statement->execute();

}

function createCommande(PDO $db): bool
{
    $id = (int)readline("Saisir l'id du client pour ajouter une commande : ");
    $clientId = getOneClientById($db, $id);
    $name = readline("Saisir le nom de la commande: ");

    if (empty($name)) {
        echo "Nom incorrect";
        return false;
    }

    $date = readline("Saisir la date de la commande (aaaa-mm-jj): ");


    if (!preg_match(DATE_PATTERN, $date)) {
        echo "Date incorrecte";
        return false;
    }


    $requestAddCommande = "INSERT INTO commandes (name, date, client_id) VALUES (:name, :date, :client_id)";
    $statement = $db->prepare($requestAddCommande);
    $statement->execute(["name" => $name, "date" => $date, "client_id" => $clientId["id"]]);

    return $statement->rowCount() === 1;
}

function showCommandeClient(PDO $db): void
{
    $id = (int)readline("Saisir l'id du client dont vous voulez avoir les informations des commandes : ");
    $clientId = getOneClientById($db, $id);

    $request = "SELECT commandes.client_id, firstname, lastname, commandes.id, commandes.name, commandes.date FROM client INNER JOIN commandes ON client.id = commandes.client_id WHERE client_id = :client_id;";
    $statement = $db->prepare($request);

    $statement->execute(["client_id" => $clientId["id"]]);

    $commandes = $statement->fetchAll(PDO::FETCH_ASSOC);

    foreach ($commandes as $commande) {
        echo json_encode($commande). PHP_EOL;
    }
}

function start(): void
{
    $db = new PDO("mysql:host=127.0.0.1:3306;dbname=exo02_commande;", "root", "");

    echo "   ____                                          _           
  / ___|___  _ __ ___  _ __ ___   __ _ _ __   __| | ___  ___ 
 | |   / _ \| '_ ` _ \| '_ ` _ \ / _` | '_ \ / _` |/ _ \/ __|
 | |__| (_) | | | | | | | | | | | (_| | | | | (_| |  __/\__ \
  \____\___/|_| |_| |_|_| |_| |_|\__,_|_| |_|\__,_|\___||___/" . PHP_EOL;

    while (true) {
        menu();
        $input = readline("Saisir une option: ");
        match ($input) {
            "1" => showClient($db),
            "2" => createClient($db),
            "3" => editClient($db),
            "5" => showCommandeClient($db),
            "6" => createCommande($db),
            "0" => exit(),
            default => print("saisie invalide"),
        };
    }
}

// Affichage du menu
function menu(): void
{
    echo "1. Afficher les clients
2. Créer un client
3. Modifier un client
4. Supprimer un client et ses commandes
5. Afficher les détails d'un client
6. Ajouter une commande
0. Quitter" . PHP_EOL;
}

start();
