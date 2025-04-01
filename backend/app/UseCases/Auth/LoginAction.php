<?php

declare(strict_types=1);

namespace App\UseCases\Auth;

use Illuminate\Support\Facades\Auth;

class LoginAction
{
    public function __invoke(
        string $email,
        string $password,
    ): void {
        $credentials = [
            'email' => $email,
            'password' => $password,
        ];

        if (! Auth::attempt($credentials)) {
            throw new \Exception('ログインに失敗しました');
        }
    }
}
