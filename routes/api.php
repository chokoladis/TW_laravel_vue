<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Catalog\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::post('/register', [AuthController::class, 'register'])->name('register');


Route::group(['controller' => ProductController::class, 'prefix' => '/products'], function () {
    Route::get('', 'index');
    Route::get('/{id}', 'show');
});
Route::group(['controller' => \App\Http\Controllers\Catalog\CategoryController::class, 'prefix' => '/categories'], function () {

});


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/token', function (Request $request) {
        return \Inertia\Inertia::render('Home', [
            'token' => $request->user()->createToken('token_name')->plainTextToken
        ]);
    });

    Route::post('/products', [ProductController::class, 'store']);
});

