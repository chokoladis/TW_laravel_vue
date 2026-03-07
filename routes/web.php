<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Catalog\ProductController;
use App\Http\Controllers\HomeController;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware([HandleInertiaRequests::class])->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name('auth.login-page');
    Route::post('/api/login', [AuthController::class, 'authByLogin'])->name('auth.login');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::group(['prefix' => '/admin'], function () {
        Route::group(['controller' => ProductController::class, 'prefix' => '/products'], function () {
            Route::get('', 'adminIndex')->name('admin.products.index');
            Route::get('/{id}', 'show');
        });
    });

//    , а также кнопка "Добавить товар".
});




//Route::get('/register', [\App\Http\Controllers\AuthController::class, 'register'])->name('register');
//Route::post('/register', [\App\Http\Controllers\AuthController::class, 'actionRegister'])->name('actionRegister');
