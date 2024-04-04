# Les traits

Les traits sont une fonctionnalité du PHP qui permet de regrouper des méthodes dans un ensemble réutilisable.
Un trait est déclaré à l'aide du mot-clé `trait` suivi du nom du trait.

```php
trait ExempleTrait {
    public function sayHi() {
        echo "Hello world!";
    }

    public function sayThanks() {
    echo "Thanks!";
    }
}
```

Pour utiliser un trait dans une classe, vous devez utiliser le mot-clé `use` suivi du nom du trait. Voici un exemple d'utilisation de trait

```php
class ExempleClass {
    use ExempleTrait;

    public function sayGoodbye() {
        echo "Goodbye world !";
    }
}

$example = new ExempleClass();
$example->sayHello();
$example->sayGoodbye();
```

Les traits ne peuvent pas être instanciés directement, ils doivent être utilisés dans une classe.
Il est également possible d'utiliser plusieurs traits dans une classe.

```php
trait ExempleTrait1 {
    public function sayHi() {
        echo "Hello world!";
    }
}

trait ExempleTrait2 {
    public function sayHi() {
        echo "Hello world!";
    }
}

class ExempleClass {
    use ExempleTrait1, ExempleTrait2 {
        ExampleTrait2::sayHello insteadof ExampleTrait1;
    }
}
```
Comme les deux traits ont le même nom, nous avons utilisé le mot-clé `insteadof` pour spécifier que la méthode `sayHello()` de `ExempleTrait2` doit être utilisé à la place de celle de `ExempleTrait1`.

