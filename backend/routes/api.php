<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GolfCourseController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function () {
    Route::get('me', [AuthController::class, 'me']);
});

Route::apiResource('golf-courses', GolfCourseController::class)->only(['index', 'show']);
