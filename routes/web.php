<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Catalog\ProductController;
use App\Http\Controllers\API\ProductController as ApiProductController;
use App\Http\Controllers\HomeController;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'index'])->name('home');

Route::group(['controller' => ProductController::class, 'prefix' => '/products'], function () {
    Route::get('/{product}', 'show');
});

Route::get('/login', [AuthController::class, 'login'])->name('login-page');
Route::post('/login', [AuthController::class, 'authByLogin'])->name('login');


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::name('admin.')->prefix('/admin')->group(function () {

        Route::group(['controller' => ProductController::class, 'prefix' => '/products'], function () {
            Route::get('', 'adminIndex')->name('products.index');
            Route::get('/add', 'create')->name('products.create');
            Route::get('/{product}', 'show')->name('products.show');
            Route::get('/{product}/edit/', 'edit')->name('products.edit');
//            Route::post('/{id}/update/', 'edit');
            Route::put('/{product}', 'update')->name('products.update');
            Route::delete('/{product}', 'delete')->name('products.update');
        });
    });

//    , а также кнопка "Добавить товар".
});

//with api
Route::prefix('/api')->group(function () {

    Route::post('/login', [AuthController::class, 'authByLogin'])->name('login');

    Route::group(['controller' => ApiProductController::class, 'prefix' => '/products'], function () {
        Route::get('', 'index');
        Route::get('/{product}', 'show');
    });
    Route::group(['controller' => \App\Http\Controllers\Catalog\CategoryController::class, 'prefix' => '/categories'], function () {
        Route::get('', 'index');
    });


    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/products', [ApiProductController::class, 'store'])->name('products.store');
        Route::patch('/products/{product}', [ApiProductController::class, 'update'])->name('products.update');
    });
});

//Route::get('/register', [\App\Http\Controllers\AuthController::class, 'register'])->name('register');
//Route::post('/register', [\App\Http\Controllers\AuthController::class, 'actionRegister'])->name('actionRegister');
