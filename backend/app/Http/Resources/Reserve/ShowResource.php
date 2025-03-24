<?php

declare(strict_types=1);

namespace App\Http\Resources\Reserve;

use Illuminate\Http\Resources\Json\JsonResource;

class ShowResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'golf_course_id' => $this->golf_course_id,
            'start_date' => $this->start_date,
            'name' => $this->name,
            'email' => $this->email,
            'person_count' => $this->person_count,
            'golf_course' => $this->golf_course,
        ];
    }
}
