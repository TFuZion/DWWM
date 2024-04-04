<?php
class CB {
  // Déclaration des propriétés
  private string $titulaire;
  protected float $solde;
  private string $devise;

  // Définition du constructeur
  public function __construct($titulaire, $soldeInitiale, $devise)
  {
    $this->titulaire = $titulaire;
    $this->solde = $soldeInitiale;
    $this->devise = $devise;
  }
  // Définition du destructeur
  public function  __destruct()
  {
    echo "Le compte de ",$this->titulaire," a été supprimer.";
  }

  // Définition des méthodes
  public function deposer($montant) :float
  {
    return $this->solde += $montant;
  }
  public function retirer($montant) :bool
  {
    if ($this->solde >= $montant) {
      $this->solde -= $montant;
      return true;
    } else {
      echo "Solde inssufisant";
      return false;
    }
  }
  public function afficherSolde() :string
  {
    return print("Solde de " . $this->titulaire . ": ". $this->solde . " " . $this->devise);
  }
}

class CE extends CB {
  // Déclaration des propriétés
  private float $tauxInteret;

  // Définition du constructeur
  public function __construct($titulaire, $soldeInitiale, $devise, $tauxInteret)
  {
    parent::__construct($titulaire, $soldeInitiale, $devise);
    $this->tauxInteret =$tauxInteret;
  }

  // Définition des méthodes
  public function calculInterets() : string
  {
    $montantInteret =  ($this->tauxInteret * $this->solde)/ 100;
    return print("Avec un taux à " . $this->tauxInteret . "% Vous générerais des intérêts s'élevant à " . $montantInteret . "€");
  }
}

class CC extends CB {
  // Déclaration des propriétés
  private float $decouvertAutorise;

  // Définition du constructeur
  public function __construct($titulaire, $soldeInitiale, $devise, $decouvertAutorise)
  {
    parent::__construct($titulaire, $soldeInitiale, $devise);
    $this->decouvertAutorise =$decouvertAutorise;
  }

  // Définition des méthodes
  public function retirerAvecDecouvert($montant) :bool
  {
    if ($this->solde - $montant >= $this->decouvertAutorise) {
      $this->solde -= $montant;
      return true;
    } else {
      echo "Découvert trop élevé";
      return false;
    }
  }
}


function startApply() :void {
  echo "
  Bienvenue sur votre Application Bancaire\n
  Veuillez choisir entre créer un compte courant ou un compte épargne\n
  \n
  [1] Créer un Compte Courant\n
  [2] Créer un Compte Épargne\n";
  $startAction = (int)readline(" \t ");
  switch ($startAction) {
    case 1:
      $titulaire = (string)readline("Entrer le nom du titulaire du compte : ");
      $soldeIni = (float)readline("Entrer un solde initiale du compte : ");
      $devise = (string)readline("Entrer la devise du solde : ");
      $decouvertAutorise = (float)readline("Entrer le montant du découvert autorisé : ");
      $compteCourant = new CC("$titulaire", "$soldeIni", "$devise", "$decouvertAutorise");
      break;
    case 2:
      $titulaire = (string)readline("Entrer le nom du titulaire du compte : ");
      $soldeIni = (float)readline("Entrer un solde initiale du compte : ");
      $devise = (string)readline("Entrer la devise du solde : ");
      $tauxInteret = (float)readline("Entrer le taux d'intérêt : ");
      $compteEpargne = new CE("$titulaire", "$soldeIni", "$devise", "$tauxInteret");
      break;
    default : echo "Erreur lors de la saisie !";
  }
  match ($startAction) {
    1 => CCMenu($compteCourant),
    2 => CEMenu($compteEpargne),
    default => "Erreur lors de la saisie !"
  };

}
function CCMenu($compte) :void {
  do {
    echo "
  Vous êtes sur votre compte quel actions souhaitez-vous faire?\n
  [1] Afficher le solde du compte\n
  [2] Déposer un montant\n
  [3] Retirer un montant\n
  [4] Retirer avec découvert\n
  [5] Supprimer votre compte bancaire\n";
    $menuAction = (int)readline(" \t ");
    switch ($menuAction) {
      case 1:
        $compte->afficherSolde();
        break;
      case 2:
        echo "
      Vous souhaitez déposer un montant sur votre compte\n
      Entrer la somme que vous souhaitez déposer : ";
        $sommeDepot = (float)readline(" \t ");
        echo $compte->deposer($sommeDepot), PHP_EOL;
        break;
      case 3:
        echo "
      Vous souhaitez retirer un montant sur votre compte\n
      Entrer la somme que vous souhaitez retirer : ";
        $sommeRetrait = (float)readline(" \t ");
        echo $compte->retirer($sommeRetrait), PHP_EOL;
        break;
      case 4:
        echo "
      Vous souhaitez retirer un montant sur votre compte\n
      Entrer la somme que vous souhaitez retirer dans la limite du découvert : ";
        $sommeRetraitDecouvert = (float)readline(" \t ");
        echo $compte->retirerAvecDecouvert($sommeRetraitDecouvert), PHP_EOL;
        break;
      case 5:
        echo "Suppression du compte";
        break;
      default: echo "Erreur lors de la saisie";
    }
  } while ($menuAction !== 5);
}

function CEMenu($compte) :void {
  do {
    echo "
  Vous êtes sur votre compte quel actions souhaitez-vous faire?\n
  [1] Afficher le solde du compte\n
  [2] Déposer un montant\n
  [3] Retirer un montant\n
  [4] Calcul de l'intérêt\n
  [5] Supprimer votre compte bancaire\n";
    $menuAction = (int)readline(" \t ");
    switch ($menuAction) {
      case 1:
        $compte->afficherSolde();
        break;
      case 2:
        echo "
      Vous souhaitez déposer un montant sur votre compte\n
      Entrer la somme que vous souhaitez déposer : ";
        $sommeDepot = (float)readline(" \t ");
        echo $compte->deposer($sommeDepot), PHP_EOL;
        break;
      case 3:
        echo "
      Vous souhaitez déposer un montant sur votre compte\n
      Entrer la somme que vous souhaitez déposer : ";
        $sommeRetrait = (float)readline(" \t ");
        echo $compte->retirer($sommeRetrait), PHP_EOL;
        break;
      case 4:
        $compte->calculInterets();
        break;
      case 5:
        echo "Suppression du compte";
        break;
      default: echo "Erreur lors de la saisie";
    }
  } while ($menuAction !== 5);
}
startApply();

