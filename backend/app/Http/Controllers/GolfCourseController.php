<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;

class GolfCourseController extends Controller
{
    /**
     * ゴルフ場一覧
     */
    public function index()
    {
        return 'Hello World';
    }

    /**
     * ゴルフ場詳細
     */
    public function show(string $golfCourseId)
    {
        return $golfCourseId;
    }
}
