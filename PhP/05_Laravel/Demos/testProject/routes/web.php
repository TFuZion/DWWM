<?php

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

// Route à la racine de mon projet
Route::get('/', function() {
    return "Hello World";
});

Route::get('/Hello', function() {
    return "Hello World: le retour";
});

// Afficher une vue
Route::view('/form', 'formulaire');

// Route post
Route::post('/user', function() {
    return "Le formulaire a bien été envoyé";
});

// Redirection de route
Route::redirect('/redirect', '/form');

Route::get('/users', function (Request $request) {
    $name = $request->input('name');
});
