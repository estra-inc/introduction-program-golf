<?php

namespace App\Http\Controllers;

use App\Http\Requests\GolfCourse\IndexRequest;
use App\Http\Resources\GolfCourse\IndexResource;
use App\Services\RakutenGoraService;
use Illuminate\Routing\Controller;

class GolfCourseController extends Controller
{
    private RakutenGoraService $rakutenGoraService;

    public function __construct(RakutenGoraService $rakutenGoraService)
    {
        $this->rakutenGoraService = $rakutenGoraService;
    }

    /**
     * ゴルフ場一覧
     */
    public function index(IndexRequest $request)
    {
        return new IndexResource(
            $this->rakutenGoraService->searchGolfCourses(
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
