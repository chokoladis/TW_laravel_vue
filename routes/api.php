<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['controller' => ProductController::class, 'prefix' => '/products'], function () {
    Route::get('', 'index');
    Route::get('/{id}', 'show');
});


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    })->middleware('auth:sanctum');

    Route::post('/token', function (Request $request) {
        return \Inertia\Inertia::render('Home', [
            'token' => $request->user()->createToken('token_name')->plainTextToken
        ]);
    });
});

