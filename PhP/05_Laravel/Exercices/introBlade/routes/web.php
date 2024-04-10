<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::view('/apropos', 'apropos');
Route::view('/contact', 'contact');
