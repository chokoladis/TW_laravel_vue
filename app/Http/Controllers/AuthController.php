<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    private AuthService $authService;

    public function __construct()
    {
        $this->authService = new AuthService();
    }

    public function login()
    {
        return Inertia::render('Auth/Login', []);
    }

    public function logout(Request $request)
    {
        $this->authService->logout($request);

        return redirect('/');
    }

    public function authByLogin(LoginRequest $request)
    {
        if ($token = $this->authService->login($request)) {
            return redirect()->route('home')
                ->with('token', $token);
        }

        return back()->withErrors([
            'email' => 'Некорректный email/пароль',
        ])->onlyInput('email');
    }

//    public function register(RegisterRequest $request)
//    {
//        $this->authService->register($request->validated());
//
//        return Inertia::render('Home');
//    }
}
