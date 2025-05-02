<?php

declare(strict_types=1);

namespace App\UseCases\Auth;

use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use App\UseCases\Auth\Exceptions\UnauthorizedMeException;

class MeAction
{
    public function __invoke(): Admin
    {
        $admin = Auth::guard('admin')->user();

        if (! $admin) {
            throw new UnauthorizedMeException();
        }

        return $admin;
    }
}