# Blade

Blade est le moteur de template fourni avec Laravel. Il permet de créer des vues en utilisant une syntaxe réactive et procédurale.

## Syntaxe de base

Blade utilise des balises spéciales pour insérer du code PHP dans les vues. Les balises Blade sont compilées en code PHP natif, ce qui permet d'obtenir des performances optimales.
Les balises Blade les plus courantes sont:
- `{{ }}`: affiche le contenu d'une variable ou d'une expression PHP.
- `@if, @elseif, @else, @endif`: permet d'utiliser les instructions conditionnelles.
- `@for, @foreach, @while, @endfor, @endforeach, @endwhile` : permet d'utiliser des boucles
- `@include`: permet d'inclure une autre vue dans la vue actuelle
- `@extends`: permet d'étendre une autre vue dans la vue actuelle
- `@section, @show, @yield`: permet de définir des sections dans une vue étendue.
