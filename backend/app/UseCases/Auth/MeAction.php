<?php

declare(strict_types=1);

namespace App\UseCases\Auth;

use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\UnauthorizedException;

class MeAction
{
    public function __invoke(): Admin
    {
        $admin = Auth::guard('admin')->user();

        if (!$admin) {
            throw new UnauthorizedException('ログインしていません');
        }

        return $admin;
    }
}
