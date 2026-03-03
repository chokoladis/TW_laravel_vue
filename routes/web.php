<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

//Route::group(['middleware' => ['auth:sanctum', 'verified']], function () {
//
//})
Route::middleware([\App\Http\Middleware\HandleInertiaRequests::class])->group(function () {
    Route::post('/api/login', [\App\Http\Controllers\AuthController::class, 'login'])->name('login');
    Route::get('/login', [\App\Http\Controllers\AuthController::class, 'loginPage'])->name('loginPage');
});
//Route::get('/register', [\App\Http\Controllers\AuthController::class, 'register'])->name('register');
//Route::post('/register', [\App\Http\Controllers\AuthController::class, 'actionRegister'])->name('actionRegister');
