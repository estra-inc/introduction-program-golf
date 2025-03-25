<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\UseCases\Auth\LoginAction;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request, LoginAction $action): void
    {
        $action(
            $request->email,
            $request->password,
            $request,
        );
    }

    public function logout(Request $request): void
    {

        Auth::logout();
        $request->session()->invalidate();
        // return new LogoutResource($action($request->email, $request->password));
        // return response()->json(['message' => 'ログアウトしました']);
    }
}
