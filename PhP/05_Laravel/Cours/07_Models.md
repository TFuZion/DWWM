# Les modèles (models)

Laravel fournit un ORM (Object-Relational Mapping) appelé Eloquent qui permet d'interagir facilement avec une BDD.
Eloquent nous fournit une interface pour effectuer les opérations CRUD (Create, Read, Update, Delete) sur les tables de la BDD.

## Création d'un modèle

Pour créer un modèle Eloquent, on utilise Artisan:
```bash
php artisan make:model NomDuModele
```

Cette commande créera un nouveau fichier PHP dans le répertoire `app\Models` avec le nom spécifié. Par convention, le nom du modèle
doit être au singulier et commencer par une lettre majuscule.

## Définition de la table associée

Par défaut, Eloquent suppose que le nom de la table associée au modèle est le pluriel du nom du modèle en minuscules.
Si votre table ne suit pas cette convention, vous pouvez définir manuellement le nom de la table en ajoutant une propriété `$table` au modèle:

```php
<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class NomDuModèle extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'nom_de_la_table';
}
```

## Définition des attributs du modèle
Eloquent suppose que chaque table a une clé primaire appelée `id`. Si votre table utilise une clé primaire différente, vous pouvez définir manuellement le nom avec la propriété `$primaryKey`

```php
<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class NomDuModèle extends Model
{
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'email';
}
```

Si votre table n'a pas de timestamps `created_at` et `updated_at`, vous pouvez désactiver leur gestion automatique en définissant la propriété `$timestamps` à `false` :

```php
<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class NomDuModèle extends Model
{
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}

```

## Récupération des données (READ)

Une fois que vous avez défini votre modèle, vous pouvez utilisez Eloquent pour récupérer vos données à partir de la BDD
```php
// Récupérer tous les enregistrements de la table
$enregistrements = NomDuModèle::all();

// Récupérer un enregistrement spécifique à l'aide de sa clé primaire
$enregistrement = NomDuModèle::find(1);

// Récupérer le premier enregistrement de la table
$enregistrement = NomDuModèle::first();

// Récupérer un enregistrement en utilisant une condition where
$enregistrement = NomDuModèle::where('colonne', 'valeur')->first();
```

## Création et mise à jour des données (CREATE/UPDATE)

```php
// Créer un nouvel enregistrement
$enregistrement = new NomDuModèle;
$enregistrement->colonne = 'valeur';
$enregistrement->save();

// Ou plus simplement :
NomDuModèle::create([
    'colonne' => 'valeur'
]);

// Mettre à jour un enregistrement existant
$enregistrement = NomDuModèle::find(1);
$enregistrement->colonne = 'nouvelle_valeur';
$enregistrement->save();

// Ou plus simplement :
NomDuModèle::where('colonne', 'valeur')->update([
    'colonne' => 'nouvelle_valeur'
]);
```

## Suppression des données

```php
// Supprimer un enregistrement existant
$enregistrement = NomDuModèle::find(1);
$enregistrement->delete();

// Supprimer tous les enregistrements correspondant à une condition where
NomDuModèle::where('colonne', 'valeur')->delete();
```