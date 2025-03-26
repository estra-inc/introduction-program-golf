<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\Auth\MeResource;
use App\UseCases\Auth\LoginAction;
use App\UseCases\Auth\LogoutAction;
use App\UseCases\Auth\MeAction;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

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

    public function logout(Request $request, LogoutAction $action): void
    {
        $action($request);
    }

    public function me(MeAction $action): MeResource
    {
        return new MeResource($action());
    }
}
