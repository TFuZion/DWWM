<?php
// Vérifier que la requête HTTP est en GET
if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    http_response_code(405);
    echo json_encode(["code" => "405", "message" => "method not allowed"]);
    return;
}

// Récupérer les tags depuis la base de données
$db = new PDO("mysql:host=127.0.0.1:3306;dbname=exercice03m2ilearning", "root", "");

$request = "SELECT * FROM tag;";

$statement = $db->prepare($request);

$result = $statement->execute();


// Renvoyer un JSON contenant les tags
echo json_encode($statement->fetchAll(PDO::FETCH_ASSOC));
