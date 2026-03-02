<?php

namespace App\Services;


use App\Exceptions\Auth\LoginException;
use App\Models\User;

class AuthService
{
    public function login(array $data)
    {
        $user = User::query()
            ->where('email', $data['email'])
            ->firstOrFail();

        if (password_verify($data['password'], $user['password'])) {
            $user->createToken('token_name');
            return true;
        } else {
            throw new LoginException();
        }
    }

    public function register(array $data)
    {
        $user = User::create($data);
        $user->createToken('token_name');
        return true;
    }
}
