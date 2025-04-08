<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// 認証
Route::post('api/login', [AuthController::class, 'login']);
Route::post('api/logout', [AuthController::class, 'logout']);
