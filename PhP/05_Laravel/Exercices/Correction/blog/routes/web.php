<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Préfixe permet d'ajouter d'ajouter un préfix aux nom de toutes les routes
// ex: articles. + index = articles.index
Route::name('articles.')->group(function () {
    Route::get('/', [ArticleController::class, 'index'])->name('index');
    Route::get('/article/{article}', [ArticleController::class, 'show'])->name('show');

    // La création d'articles nécessite d'être connecté
    Route::get('/create', [ArticleController::class, 'create'])->name('create')->middleware('auth');
    Route::post('/', [ArticleController::class, 'store'])->name('store')->middleware('auth');
});

Route::name('comments.')->prefix("comments")->group(function () {
    Route::post("/{articleId}", [CommentController::class, 'store'])->name('store')->middleware('auth');
});

require __DIR__.'/auth.php';
