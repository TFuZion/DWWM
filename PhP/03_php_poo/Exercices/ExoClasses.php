<?php

class Fruit
{
  public $color;
  public $shape;
  public $season;

  public function __construct($color, $shape, $season)
  {
    $this->color = $color;
    $this->shape = $shape;
    $this->season = $season;
  }
  public function sugar()
  {
    print("miam c'est sucré");
  }
}

$banane = new Fruit("jaune", "ellipse", "été");
$banane = new Fruit("red", "ronde", "automne");
$banane->sugar();

