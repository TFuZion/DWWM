<?php

$db = null;

try {
    $db = new PDO('mysql:host=localhost; dbname=db_exo01_etudiant', "root", "");
    echo "la connexion est établie !";
} catch (PDOException $ex) {
    echo $ex->getMessage();
}

//$db->exec("CREATE DATABASE IF NOT EXISTS db_exo01_etudiant CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;");

//$request = "CREATE TABLE IF NOT EXISTS `student` (
//    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//    `firstname` VARCHAR(50) NOT NULL,
//    `lastname` VARCHAR(50) NOT NULL,
//    `date_of_birth` DATETIME,
//    `email` VARCHAR(70)
//)";
//
//$db->exec($request);


//Create
function create()
{
    $firstname = readline(prompt: "Entrer votre prénom : ");

    if(empty($firstname)){
        echo "Prenom incorrect";
        return false;
    }

    $lastname =  readline(prompt: "Entrer votre nom : ");


    if(empty($lastname)){
        echo "Nom incorrect";
        return false;
    }

    $dob =  readline(prompt: "Entrer votre date de naissance (YYYY/MM/DD) : ");

    if(empty($dob)) {
        echo "Date incorrecte";
        return false;
    }

    $email =  readline(prompt: "Entrer votre email : ");


    if(empty($email)){
        echo "Email incorrect";
        return false;
    }

    $addRequest = "INSERT INTO student (firstname, lastname, date_of_birth, email) VALUES (:firstname, :lastname, :date_of_birth, :email);";

    $statement = $db->prepare($addRequest);
    $statement->execute(["firstname" => $firstname, "lastname" => $lastname, "date_of_birth" => $dob, "email" => $email]);
}



//Read
function show()
{
    $showRequest = "SELECT * FROM student;";

    $query = $db->prepare($showRequest);

    $query->execute();

    $results = $query->fetchAll(PDO::FETCH_ASSOC);

    foreach($results as $student) {
        print_r($student);
    }
}


//Update
function update()
{
    $update_firstname = "Juju";
    $update_lastname = "Poste";
    $update_dob = "2005-02-07";
    $update_email = "juju.poste@gmail.com";

    $updateRequest = "UPDATE student SET firstname = :firstname, lastname = :lastname, date_of_birth = :date_of_birth, email = :email WHERE id=:id;";
    $statement = $db->prepare($updateRequest);
    $statement->bindValue(param: "firstname", var:$update_firstname);
    $statement->bindValue(param: "lastname", var:$update_lastname);
    $statement->bindValue(param: "date_of_birth", var:$update_dob);
    $statement->bindValue(param: "email", var:$update_email);
    $statement->execute();
}


//DELETE
function delete()
{
    $idToDelete = readline("Entrer l'id de l'etudiant que vous souhaitez supprimer : ");
    $deleteRequest = "DELETE FROM student WHERE id=:id";
    $statement = $db->prepare($deleteRequest);
    $statement->execute(["id" => $idToDelete]);
}

$choiceCommande = readline(prompt: "1. Create a Student \n2. Show Students \n3. Update a Student \n4. Delete a Student");

switch($choiceCommande) {
    case 1 :
        create();
    case 2 :
        show();
    case 3 :
        update();
    case 4 :
        delete();
    default :
        echo "Erreur de Commande";
}


