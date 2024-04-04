# Abstraction

L'abstraction consiste à définir une classe ou une méthode qui ne peut pas être instanciée ou appelée directement, mais qui fournit une base commune pour les classes dérivées.

## Classes abstraites

Une classe abstraite ne peut être instanciée directement mais peu être étendue par d'autres classes.
Une classe abstraite est définie en utilisant le mot-clé `abstract` et peut contenir des méthodes abstraites.

```php
abstract class FormeGeometrique {
    protected $couleur;

    public function __construct($couleur) {
        $this->couleur = $couleur;
    }

    public function getCouleur() {
        return $this->couleur;
    }

    abstract public function aire();
    abstract public function perimetre();
}
```
Dans cet exemple, nous avons créé une classe abstraite `FormeGeometrique` qui contient deux méthodes abstraites `aire()` et `perimetre()`. Les méthodes abstraites sont définies en utilisant le mot-clé `abstract` et ne contiennent pas de code d'implémentation.

Les classes dérivées **doivent** implémenter les méthodes abstraites.

```php
class Cercle extends FormeGeometrique {
    private $rayon;

    public function __construct($rayon) {
    $this->rayon = $rayon;
    }

    public function aire() {
        return pi() * pow($this->rayon, 2);
    }

    public function perimetre() {
        return 2 * pi() * $this->rayon;
    }
}
```

L'abstraction permet des créer des classes plus flexibles et extensibles, en fournissant une base commune pour les fonctionnalités tout en laissant la liberté aux classes dérivées de fournir leur propre implémentation.

