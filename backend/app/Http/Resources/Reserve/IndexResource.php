<?php

declare(strict_types=1);

namespace App\Http\Resources\Reserve;

use App\Enums\ReserveStatus;
use Illuminate\Http\Resources\Json\ResourceCollection;

class IndexResource extends ResourceCollection
{
    public function toArray($request)
    {
        return $this->collection->map(function ($item) {
            return [
                'id' => $item->id,
                'start_date' => $item->start_date,
                'guest_name' => $item->guest_name,
                'guest_email' => $item->guest_email,
                'person_count' => $item->person_count,
                'status' => [
                    'id' => $item->status_id,
                    'name' => ReserveStatus::getLabel($item->status_id),
                ],
                'golf_course_name' => $item->golf_course_name,
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
