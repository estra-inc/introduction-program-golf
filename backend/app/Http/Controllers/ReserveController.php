<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reserve\IndexRequest;
use App\Http\Requests\Reserve\StoreRequest;
use App\Http\Requests\Reserve\UpdateRequest;
use App\Http\Resources\Reserve\IndexResource;
use App\Http\Resources\Reserve\ShowResource;
use App\Models\Reserve;
use App\UseCases\Reserve\DestroyAction;
use App\UseCases\Reserve\IndexAction;
use App\UseCases\Reserve\ShowAction;
use App\UseCases\Reserve\StoreAction;
use App\UseCases\Reserve\UpdateAction;
use Illuminate\Routing\Controller;

class ReserveController extends Controller
{
    public function index(IndexRequest $request, IndexAction $action): IndexResource
    {
        return new IndexResource($action((int)$request->page, (int)$request->limit));
    }

    public function show(Reserve $reserve, ShowAction $action): ShowResource
    {
        return new ShowResource($action($reserve));
    }

    public function store(StoreRequest $request, StoreAction $action): void
    {
        $action(
            $request->start_date,
            $request->guest_name,
            $request->guest_email,
            (int)$request->person_count,
            $request->golf_course_name,
            $request->golf_course_image_url1,
            $request->golf_course_image_url2,
            $request->golf_course_image_url3,
            $request->golf_course_image_url4,
            $request->golf_course_image_url5,
        );
    }

    public function update(Reserve $reserve, UpdateRequest $request, UpdateAction $action): void
    {
        $action($reserve, $request->validated());
    }

    public function destroy(Reserve $reserve, DestroyAction $action): void
    {
        $action($reserve);
    }
}
