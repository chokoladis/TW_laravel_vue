<?php

namespace App\Services;

use App\Models\User;

class AuthService
{

    public function register(array $data)
    {
        $user = User::create($data);
        $user->createToken('token_name');
        return true;
    }
}
