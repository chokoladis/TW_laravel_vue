<?php

namespace App\Http\Controllers;

use App\Exceptions\Auth\LoginException;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Services\AuthService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Client\Request;
use Illuminate\Session\Store;
use Inertia\Inertia;

class AuthController extends Controller
{
    private AuthService $authService;

    public function __construct()
    {
        $this->authService = new AuthService();
    }

    public function loginPage()
    {
        return Inertia::render('Auth/Login', []);
    }

    public function login(LoginRequest $request)
    {
        try {
            $this->authService->login($request->validated());

            return redirect()->route('home')->with('message', 'Вы успешно авторизовались');
        } catch (ModelNotFoundException|LoginException $e) {
            return redirect()->back()->withErrors(['email' => 'Некорректный email/пароль'])->onlyInput('email');
        }
    }

//    public function register(RegisterRequest $request)
//    {
//        $this->authService->register($request->validated());
//
//        return Inertia::render('Home');
//    }
}
