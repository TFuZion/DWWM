<?php
class CompteBancaire
{
    // Déclaration des propriétés
    private string $titulaire;
    private float $solde;
    private string $devise;

    // Définition du constructeur
    public function __construct($titulaire, $solde, $devise){
        $this->titulaire = $titulaire;
        $this->solde = $solde;
        $this->devise = $devise;
    }

    // Définition du destructeur
    public function __destruct(){
        echo "Le compte de ".$this->titulaire. " a été détruit.";
    }

    // Définition des méthodes
    public function deposer($montant) : float {
        return $this->solde += $montant;
    }

    public function retirer($montant) : bool {
        if ($this->solde >= $montant) {
            $this->solde -= $montant;
            return true;
        } else {
            echo "Solde insuffisant";
            return false;
        }
    }

    public function afficherSolde() : string {
        return print("Solde de " . $this->titulaire . ": ". $this->solde . " " . $this->devise);
    }
}

// Création d'un objet compte à partir de la classe
$compte = new CompteBancaire("John Doe", 1000, "EUR");

// Dépôt d'argent sur le compte
$compte->deposer(500);

// Retrait d'argent sur le compte
$compte->retirer(200);

//Tentative de retrait d'un montant supérieur au solde
$compte->retirer(20000);

// Affichage du solde du compte
$compte->afficherSolde();

// Destruction de l'objet compte
unset($compte); // Afficher "Le compte de John Doe a été détruit"