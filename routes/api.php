<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Catalog\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::post('/register', [AuthController::class, 'register'])->name('auth.register');
Route::post('/login', [AuthController::class, 'authByLogin'])->name('auth.login');

Route::group(['controller' => ProductController::class, 'prefix' => '/products'], function () {
    Route::get('', 'index');
    Route::get('/{id}', 'show');
});
Route::group(['controller' => \App\Http\Controllers\Catalog\CategoryController::class, 'prefix' => '/categories'], function () {
    Route::get('', 'index');
});


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/products', [ProductController::class, 'store'])->name('products.store');
});


