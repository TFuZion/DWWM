<?php

function showCustomers(PDO $db): void
{
    // Ici query permet d'exécuter une requête sans la préparer en renvoyer un objet PDOStatement
    $statement = $db->query("SELECT * FROM customer;");

    foreach ($statement->fetchAll(PDO::FETCH_ASSOC) as $customer) {
        echo json_encode($customer) . PHP_EOL;
    }
}

function createCustomer(PDO $db): void
{
    $firstname = readline("Prénom: ");
    $lastname = readline("Nom: ");
    $address = readline("Adresse: ");
    $zipCode = readline("Code postal: ");
    $city = readline("Ville: ");
    $phone = readline("Téléphone: ");

    $request = "INSERT INTO customer (firstname, lastname, address, zip_code, city, phone) VALUES (:firstname, :lastname, :address, :zipCode, :city, :phone)";

    $statement = $db->prepare($request);

    try {
        $statement->execute(["firstname" => $firstname, "lastname" => $lastname, "address" => $address, "zipCode" => $zipCode, "city" => $city, "phone" => $phone]);
    } catch (PDOException $ex) {
        echo $ex->getMessage();
    }
}

function editCustomer(PDO $db): void
{
    $id = (int)readline("ID client: ");

    $customer = getOneCustomerById($db, $id);

    if (!$customer) {
        echo "Aucun client avec l'id {$id}";
        return;
    }

    $firstname = readline("Prénom: ");
    $lastname = readline("Nom: ");
    $address = readline("Adresse: ");
    $zipCode = readline("Code postal: ");
    $city = readline("Ville: ");
    $phone = readline("Téléphone: ");

    $request = "UPDATE customer SET firstname=:firstname, lastname=:lastname, address=:address, zip_code = :zipCode, city=:city, phone=:phone WHERE id=:id";

    $statement = $db->prepare($request);

    $statement->bindValue(":firstname", $firstname);
    $statement->bindValue(":lastname", $lastname);
    $statement->bindValue(":address", $address);
    $statement->bindValue(":zipCode", $zipCode);
    $statement->bindValue(":city", $city);
    $statement->bindValue(":phone", $phone);
    $statement->bindValue(":id", $id);

    $statement->execute();
}

function deleteCustomer(PDO $db): void
{
    $customerId = (int)readline("ID client: ");

    $customer = getOneCustomerById($db, $customerId);

    if (!$customer) {
        echo "Aucun client avec l'id {$customerId}";
        return;
    }

    $db->beginTransaction();


    try {
        $request = "DELETE FROM `order` WHERE customer_id=:customerId";

        $statement = $db->prepare($request);

        $statement->execute(["customerId" => $customerId]);

        $request = "DELETE FROM customer WHERE id=:customerId";

        $statement = $db->prepare($request);

        $statement->execute(["customerId" => $customerId]);

        // Valide les modifications
        $db->commit();

    } catch (PDOException $ex) {

        // Revient à l'état initial avant la transaction
        $db->rollBack();
        echo $ex->getMessage() . PHP_EOL;
    }

}

function showCustomerDetails(PDO $db): void
{
    $customerId = (int)readline("ID client: ");

    $customer = getOneCustomerById($db, $customerId);

    if (!$customer) {
        echo "Aucun client avec l'id {$customerId}" . PHP_EOL;
        return;
    }

    $request = "SELECT * FROM `order` WHERE customer_id=:customerId";
    $statement = $db->prepare($request);
    $statement->execute(["customerId" => $customerId]);

    echo "Client: {$customer["firstname"]} {$customer["lastname"]}" . PHP_EOL;

    $orders = $statement->fetchAll(PDO::FETCH_ASSOC);

    if (empty($orders)) {
        echo "\tAucune commandes";
        return;
    }

    foreach ($orders as $order) {
        echo "\t" . json_encode($order) . PHP_EOL;
    }
}

function getOneCustomerById(PDO $db, int $id): array|false
{
    $request = "SELECT * FROM customer WHERE id=:id;";
    $statement = $db->prepare($request);
    $statement->execute(["id" => $id]);

    return $statement->fetch(PDO::FETCH_ASSOC);
}

function createOrder(PDO $db): void
{
    $customerId = (int)readline("ID client: ");

    $customer = getOneCustomerById($db, $customerId);

    if (!$customer) {
        echo "Aucun client avec l'id {$customerId}";
        return;
    }

    $createdAt = readline("Date (yyyy-mm-dd hh:mm:ss): ");
    $amount = (float)readline("Montant:");

    $request = "INSERT INTO `order` (created_at, amount, customer_id) VALUES (:createdAt, :amount, :customerId);";

    $statement = $db->prepare($request);
    $statement->bindValue(":createdAt", $createdAt);
    $statement->bindValue(":amount", $amount);
    $statement->bindValue(":customerId", $customerId);

    $statement->execute();
}

function start(): void {
    $db = new PDO("mysql:host=127.0.0.1:3306;dbname=exercice02commandes;", "root", "");

    while(true) {
        menu();
        $input = readline("Option: ");
        match($input) {
            "1" => showCustomers($db),
            "2" => createCustomer($db),
            "3" => editCustomer($db),
            "4" => deleteCustomer($db),
            "5" => showCustomerDetails($db),
            "6" => createOrder($db),
            "0" => exit(),
            default => print("Saisie invalide\n"),
        };
    }

}

function menu(): void {
    echo "1. Afficher les clients
2. Créer un client
3. Modifier un client
4. Supprimer un client
5. Afficher les détails d'un client
6. Ajouter une commande
0. Quitter" . PHP_EOL;
}

start();