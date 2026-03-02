<?php

namespace App\Http\Controllers;

use App\Exceptions\Auth\LoginException;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Services\AuthService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Client\Request;

class AuthController extends Controller
{
    private AuthService $authService;

    public function __construct()
    {
        $this->authService = new AuthService();
    }

    public function login(LoginRequest $request)
    {
        try {
            $this->authService->login($request->validated());

            return \Inertia\Inertia::render('Home', [
                'result' => true,
                'message' => 'Авторизация прошла успешно',
            ]);
        } catch (ModelNotFoundException|LoginException $e) {
            return \Inertia\Inertia::render('Home', [
                'result' => false,
                'message' => 'Некорректный логин/пароль',
            ]);
        }
    }

    public function register(RegisterRequest $request)
    {
        $this->authService->register($request->validated());

        return \Inertia\Inertia::render('Home');
    }
}
