# Blog

## Création de modèles

1. Créer les modèles nécessaires au projet !
   - commande: `php artisan make:model -mcR` créé un modèle avec sa migration, son controller et une FormRequest
2. On édite les migrations pour créer nos modèles
3. On met à jour notre base de données à l'aide de la commande: `php artisan migrate`
4. On édite ensuite les modèles Eloquent pour lier les modèles entre eux (relations One To One, One To Many, Many To Many)

## Ajouter Breeze
1. `composer require laravel/breeze --dev`
2. `php artisan breeze:install`
3. `php artisan migrate`
4. `npm install`
5. `npm run dev`


## Seed la base de données 
- `php artisan db:seed`
