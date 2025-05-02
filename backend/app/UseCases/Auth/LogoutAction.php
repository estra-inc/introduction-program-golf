<?php

declare(strict_types=1);

namespace App\UseCases\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\UseCases\Auth\Exceptions\AlreadyLoggedOutException;

class LogoutAction
{
    public function __invoke(Request $request): void
    {
        if (Auth::guard('admin')->guest()) {
            throw new AlreadyLoggedOutException();
        }

        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }
}