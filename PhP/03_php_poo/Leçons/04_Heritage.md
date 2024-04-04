# Héritage et polymorphisme

## Héritage de classe

L'héritage est un concept clé de la POO qui permet de créer une nouvelle classe à partir d'une classe existante. La nouvelle classe hérite des propriétés et des méthodes de la classe existante, ce qui permet de réutiliser du code et de créer des hiérarchies de classes.

En PHP, vous pouvez utiliser le mot-clé `extends` pour créer une nouvelle classe qui hérite d'une autre classe.

```php
class Animal {
    public $nom;

    public function __construct($nom) {
        $this->nom = $nom;
    }

    public function manger() {
        echo "L'animal mange";
    }
}

class Chat extends Animal {
    public function ronronner() {
        echo "Le chat ronronne";
    }
}

$monChat = new Chat("Félix");
$monChat->manger(); // Afficher "L'animal mange"
$monChat->ronronner(); // Affiche "Le chat ronronne"
```

## Le polymorphisme

Le polymorphisme est un autre concept clé de la POO qui permet à un objet d'avoir **plusieurs formes**.
En PHP, le polymophisme est généralement implémenté à l'aide de l'héritage et de la surcharge de méthodes.

La surcharge de méthodes consiste à définir une méthode dans une classe fille avec le même nom que celle d'une classe parente, mais avec une implémentation différente. Lorsqu'une méthode est appelée sur un objet, PHP détermine quelle version de la méthode doit être exécutée en fonction du type de l'objet.

```php
class Forme {
    public function dessiner() {
        echo "Dessiner une forme";
    }
}

class Cercle extends Forme {
    public function dessiner() {
        echo "Dessiner un cercle";
    }
}

class Carre extends Forme {
    public function dessiner() {
        echo "Dessine un carré";
    }
}

$monCercle = new Cercle();
$monCarre = new Carre();

dessinerForme($monCercle) // Affiche "Dessiner un cercle"
dessinerForme($monCarre) // Affiche "Dessiner un carré"
```