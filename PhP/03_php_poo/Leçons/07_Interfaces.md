# Les interfaces

Les interfaces sont des structures de code qui permettent de définir un contrat pour une classe. Ce contrat spécifie les méthodes que la classe doit implémenter, sans pour autant en définir les comportements. Les interfaces sont utiles pour garantir que les classes qui les implémentent ont un ensemble commun de méthodes, ce qui facilite la maintenance et l'évolutivité du code.

## Définition

Une interface est définie à l'aide du mot-clé `interface`, suivi du nom de l'interface. Les noms d'interfaces commencent par convention par une lettre majuscule et sont écrits en camelCase (comme les classes). Les méthodes d'une interface ne peuvent pas avoir de corps.

```php
interface Animal() {
    public function manger();
    public function dormir();
} 
```

## Implémentation d'une interface
Pour implémenter une interface, notre classe utilise le mot-clé `implements` suivi du nom de l'interface. La classe devra alors implémenter toutes les méthodes définies dans l'interface. Les méthodes implémentées doivent avoir la même signature que celles définies (c'est à dire le même nom, les mêmes paramètres et le même type de retour)

```php
class Chat implements Animal {
    public function manger() {
        echo "miam miam";
    }

    public function dormir() {
        echo "zZZzzzZ";
    }
}
```

**Une classe peut implémenter plusieurs interfaces en les séparant par une virgule.**

## Héritage d'interface

Une interface peut hériter d'une ou plusieurs autres interfaces à l'aide du mot-clé `extends`. L'interface enfant hérite alors de toutes les méthodes définies dans l'interface parent.

```php
interface Carnivore extends Animal {
    public function chasser();
}
```