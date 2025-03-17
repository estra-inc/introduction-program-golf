<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\GolfCourse\IndexRequest;
use App\Http\Resources\GolfCourse\IndexResource;
use App\UseCases\GolfCourse\IndexAction;
use Illuminate\Routing\Controller;

class GolfCourseController extends Controller
{
    /**
     * ゴルフ場一覧
     */
    public function index(IndexRequest $request, IndexAction $action): IndexResource
    {
        return new IndexResource(
            $action(
                $request->page ?? 1,
                $request->keyword,
                $request->areaCode,
                $request->latitude,
                $request->longitude
            )
        );
    }

    /**
     * ゴルフ場詳細
     */
    public function show(string $golfCourseId)
    {
        return $golfCourseId;
    }
}
