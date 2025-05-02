<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GolfCourseController;
use App\Http\Controllers\ReserveController;
use Illuminate\Support\Facades\Route;

// ゴルフ場
Route::apiResource('golf-courses', GolfCourseController::class)->only(['index', 'show']);

// 予約
Route::post('reserves', [ReserveController::class, 'store']); // ゲストユーザが予約できるようにルート保護はしません

Route::middleware('auth:sanctum')->group(function () {
    Route::get('me', [AuthController::class, 'me']);

    // NOTE: Laravelが「reserf」という名前のパラメータとして解釈してしまうため、パラメータ名を変更する
    Route::apiResource('reserves', ReserveController::class)->only(['index', 'show', 'update', 'destroy'])->parameters(['reserves' => 'reserve']);
});