<?php

class Rectangle
{
  public int $largeur;
  public int $hauteur;

  public function __construct($largeur, $hauteur)
  {
    $this->largeur = $largeur;
    $this->hauteur = $hauteur;
  }
  public function perimetre() : int
  {
    return ($this->largeur + $this->hauteur)*2;
  }
  public function surface() : int
  {
    return $this->largeur * $this->hauteur;
  }
}

$rectangle = new Rectangle(5,10);
echo $rectangle->surface(), PHP_EOL;
echo $rectangle->perimetre(),PHP_EOL;

