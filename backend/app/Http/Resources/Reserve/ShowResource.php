<?php

declare(strict_types=1);

namespace App\Http\Resources\Reserve;

use App\Enums\ReserveStatus;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'golf_course_id' => $this->golf_course_id,
            'start_date' => $this->start_date,
            'guest_name' => $this->guest_name,
            'guest_email' => $this->guest_email,
            'person_count' => $this->person_count,
            'status' => [
                'id' => $this->status_id,
                'name' => ReserveStatus::getLabel($this->status_id),
            ],
            'golf_course_name' => $this->golf_course_name,
            'golf_course_image_url1' => $this->golf_course_image_url1,
            'golf_course_image_url2' => $this->golf_course_image_url2,
            'golf_course_image_url3' => $this->golf_course_image_url3,
            'golf_course_image_url4' => $this->golf_course_image_url4,
            'golf_course_image_url5' => $this->golf_course_image_url5,
        ];
    }
}
