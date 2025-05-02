<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\UseCases\Auth\LoginAction;
use App\UseCases\Auth\LogoutAction;
use Illuminate\Http\Request;
use App\Http\Resources\Auth\MeResource;
use App\UseCases\Auth\MeAction;

class AuthController extends Controller
{
    public function login(LoginRequest $request, LoginAction $action)
    {
        $action($request->email, $request->password);
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
