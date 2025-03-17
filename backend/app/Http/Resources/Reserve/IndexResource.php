<?php

declare(strict_types=1);

namespace App\Http\Resources\Reserve;

use Illuminate\Http\Resources\Json\ResourceCollection;

class IndexResource extends ResourceCollection
{
    public function toArray($request)
    {
        return $this->collection->map(function ($item) {
            return [
                'id' => $item->id,
                'golf_course_id' => $item->golf_course_id,
                'start_date' => $item->start_date,
                'name' => $item->name,
                'email' => $item->email,
                'person_count' => $item->person_count,
            ];
        });
    }
    // TODO: ページネーションの情報を返す
    // public function with($request)
    // {
    //     return [
    //         'meta' => [
    //             'current_page' => $this->currentPage(),
    //             'from' => $this->firstItem(),
    //             'last_page' => $this->lastPage(),
    //             'path' => $this->path(),
    //             'per_page' => $this->perPage(),
    //             'to' => $this->lastItem(),
    //             'total' => $this->total(),
    //         ],
    //     ];
    // }
}
