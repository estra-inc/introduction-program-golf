<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function () {
    Route::get('me', [AuthController::class, 'me']);
});
