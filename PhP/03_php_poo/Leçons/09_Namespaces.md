# Les namespaces

Les namespaces sont une fonctionnalité de PHP qui permet de regrouper des classes, des interfaces, des traits et des fonctions sous un même nom afin d'éviter des conflits de noms. Les namespaces permettent d'organiser le code source de manière logique et hiérarchique, ce qui facilite la maintenance et la réutilisation du code.

## Déclaration d'un namespace

Pour déclarer un namespace, on utilise le mot-clé `namespace` suivi du nom du namespace. Le nom du namespace suit les mêmes règles que les noms de classe en PHP.

```php
namespace Application\Model
```

## Utilisation d'un namespace

Pour utiliser un namespace, on utilise le mot-clé `use` suivi du nom complet du namespace qui peut être suivi par le nom de la classe, de l'interface, du trait qu'il contient...

```php
namespace Application\Controller;

use Application\Model\Utilisateur;
use Application\Model\Article;

class AccueilController {
    public function afficher(Utilisateur $utilisateur, Article $article) {
        // code ici
    }
}
```