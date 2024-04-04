# Niveau de classe

Le niveau de classe en PHP se réfère à tous les éléments qui sont définis et accessibles au niveau de la classe elle-même, plutôt qu'au niveau des instances de la classe. Cela inclut les propriétés statiques, les méthodes statiques et les constantes de classe.

1. **Propriétés statiques:**
Les propriétés statiques sont des variables qui appartiennent à la classe elle-même, plutôt qu'à une instance de classe. Cela signifie qu'il n'y a qu'une seule copie de cette propriété, peu importe le nombre d'instances de la classe que vous créez. Les propriétés statiques sont souvent utilisées pour stocker des valeurs qui doivent être partagées entre toutes les instances d'une classe.

```php
class MaClasse {
    public static $maProprieteStatique = "Valeur par défaut";
}

// Accès à la propriété statique
echo MaClasse::$maProprieteStatique; // Affiche "Valeur par défaut";
```

2. **Méthodes statiques:**
Les méthodes statiques sont des fonctions qui appartiennent à la classe elle-même, plutôt qu'à une instance de classe. Elles peuvent être appelées sans avoir à créer une instance. **Les méthodes statiques ne peuvent accéder qu'aux propriétés statiques et appeler d'autres méthodes statiques.** Elles ne peuvent pas accéder à `$this` (qui fait référence à l'instance de classe).

```php
class MaClasse {
    public static function maMethodeStatique() {
        echo "Ceci est une méthode statique";
    };
}

// Accès à la méthode statique
MaClasse::maMethodeStatique(); // Affiche "Ceci est une méthode statique";
```

3. **Constantes de classe:**
Les constantes de classe sont des valeurs qui sont définies au niveau de la classe elle-même et qui ne peuvent pas être modifiées après avoir été définies.

```php
class MaClasse {
    const MA_CONSTANTE = "Ma constante de classe";
}

// Accès à la propriété statique
echo MaClasse::MA_CONSTANTE; // Affiche "Valeur par défaut";
```

**Attention:** L'utilisation d'un niveau de classe peut être utile pour créer des fonctionnalitées qui ne dépendent pas d'un état d'objet particulier. Cependant, l'utilisation excessive de méthodes et de propriétés statiques peut conduire à un code difficile à tester et à maintenir, car elle introduit des dépendances cachées et brise l'encapsulation.

## self

En PHP, le mot-clé `self` est utilisé pour faire référence à la classe courante, c'est à dire la classe dans laquelle il est utilisé. Il est utilisé pour accéder aux propriétés et aux méthodes statiques de la classe.

```php
class MaClasse {
    public static $maProprieteStatique = "Valeur par défaut";

    public static function afficherProprieteStatique() {
        echo self::$maProprieteStatique;
    }
}
```

## parent

Le mot-clé parent est utilisé pour faire référence à la classe parente d'une classe enfant. Par exemple, si une classe enfant définit une méthode avec le même nom qu'une méthode de la classe parent, la classe enfant remplacera la classe parente. Cependant, si la méthode de la classe enfant a besoin d'appeler la méthode de la classe parente, elle peut utiliser le mot-clé `parent` pour appeler la méthode de la classe parente.

```php
class Animal {
    public function afficherNom() {
        echo "Je suis un animal. ";
    }
}

class Chien extends Animal {
    public function afficherNom() {
        parent::afficherNom();
        echo "Je suis un chien";
    }
}

$monChien = new Chien();
$monChien->afficherNom(); // Affiche "Je suis un animal. Je suis un chien"
```