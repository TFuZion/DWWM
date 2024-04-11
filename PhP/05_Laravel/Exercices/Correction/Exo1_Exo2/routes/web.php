<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/contact', [ContactController::class, 'create']);

Route::post('/contact', [ContactController::class, 'store']);

Route::get('/contact/thanks', [ContactController::class, 'thanks']);
