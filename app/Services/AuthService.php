<?php

namespace App\Services;

use App\Exceptions\Auth\LoginException;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    const TOKEN_NAME = 'token';

    public function register(array $data)
    {
        $user = User::create($data);
        $user->createToken('token_name');
        return true;
    }

    public function login(LoginRequest $request)
    {
        try {
            if (Auth::attempt($request->validated())) {
                // or auth()->user();
                return $request->user()->createToken(self::TOKEN_NAME)->plainTextToken;
            }
        } catch (ModelNotFoundException|LoginException $e) {}
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return true;
    }
}
