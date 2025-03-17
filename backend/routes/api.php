<?php

use App\Http\Controllers\GolfCourseController;
use App\Http\Controllers\ReserveController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// ゴルフ場
Route::apiResource('golf-courses', GolfCourseController::class)->only(['index', 'show']);

// 予約
Route::post('reserves', [ReserveController::class, 'store']);

// 予約
// TODO: 認可 can:adminのような実装する
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('reserves', ReserveController::class)->only(['index', 'show', 'update', 'destroy']);
});
