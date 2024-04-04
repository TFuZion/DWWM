<?php

Class Personnage {
  // Déclaration des propriétés
  private float $nom;
  private float $vie;
  private float $force;
  private float $defense;
  private float $vitesse;

  // Définition du constructeur
  public function __construct($nom, $vie, $force, $defense, $vitesse)
  {
    $this->nom = $nom;
    $this->vie = $vie;
    $this->force = $force;
    $this->defense = $defense;
    $this->vitesse = $vitesse;
  }

  // Définition des méthodes
  public function getNom() :string
  {
    return $this->nom;
  }  public function getVie() :string
  {
    return $this->vie;
  }  public function getForce() :string
  {
    return $this->force;
  }  public function getDefense() :string
  {
    return $this->defense;
  }  public function getVitesse() :string
  {
    return $this->vitesse;
  }
  public function attaquer($cible) {

  }
}

class Guerrier extends Personnage
{
  public function attaquer($cible)
  {

  }
}class Mage extends Personnage
{
  public function attaquer($cible)
  {

  }
}class Archer extends Personnage
{
  public function attaquer($cible)
  {

  }
}
$choix = (int)readline("");
if ($choix === 1) {
  $choix = Guerrier::
}
$player = new $choix