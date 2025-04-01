<?php

declare(strict_types=1);

namespace App\UseCases\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\UnauthorizedException;

class LogoutAction
{
    public function __invoke(Request $request): void
    {
        // NOTE: multi authを行う場合はguardを指定する
        if (Auth::guard('admin')->guest()) {
            throw new UnauthorizedException('すでにログアウトしています');
        }

        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }
}
