<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reserve\StoreRequest;
use App\UseCases\Reserve\StoreAction;
use Illuminate\Routing\Controller;

class ReserveController extends Controller
{
    public function index()
    {
        return 'Hello World';
    }

    public function show()
    {
        return 'Hello World';
    }

    public function store(StoreRequest $request, StoreAction $action): void
    {
        $action(
            $request->golf_course_id,
            $request->start_date,
            $request->name,
            $request->email,
            $request->person_count,
        );
    }

    public function update()
    {
        return 'Hello World';
    }

    public function destroy()
    {
        return 'Hello World';
    }
}
