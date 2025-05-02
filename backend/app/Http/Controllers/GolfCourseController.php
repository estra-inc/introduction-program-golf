<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\GolfCourse\IndexRequest;
use App\Http\Resources\GolfCourse\IndexResource;
use App\Http\Resources\GolfCourse\ShowResource;
use App\UseCases\GolfCourse\IndexAction;
use App\UseCases\GolfCourse\ShowAction;
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
                (int) ($request->page ?? 1),
                $request->keyword ?? null,
                (int) ($request->areaCode ?? null),
                (float) ($request->latitude ?? null),
                (float) ($request->longitude ?? null),
            )
        );
    }

    /**
     * ゴルフ場詳細
     */
    public function show(string $golfCourseId, ShowAction $action): ShowResource
    {
        return new ShowResource($action((int) $golfCourseId));
    }
}