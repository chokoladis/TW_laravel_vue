<?php

namespace App\Http\Controllers;

use App\Exceptions\Auth\LoginException;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\AuthService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Auth;
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
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function store(LoginRequest $request)
    {
        try {
            if (Auth::attempt($request->validated())) {
                $request->session()->regenerate();

                return redirect()->intended();
            }

            return back()->withErrors([
                'email' => 'Некорректный email/пароль',
            ])->onlyInput('email');
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
