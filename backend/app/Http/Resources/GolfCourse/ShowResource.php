<?php

declare(strict_types=1);

namespace App\Http\Resources\GolfCourse;

use Illuminate\Http\Resources\Json\JsonResource;

class ShowResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'golfCourseId' => $this['Item']['golfCourseId'],
            'golfCourseName' => $this['Item']['golfCourseName'],
            'golfCourseCaption' => $this['Item']['golfCourseCaption'],
            'golfCourseImageUrl1' => $this['Item']['golfCourseImageUrl1'],
            'golfCourseImageUrl2' => $this['Item']['golfCourseImageUrl2'],
            'golfCourseImageUrl3' => $this['Item']['golfCourseImageUrl3'],
            'golfCourseImageUrl4' => $this['Item']['golfCourseImageUrl4'],
            'golfCourseImageUrl5' => $this['Item']['golfCourseImageUrl5'],
            'evaluation' => $this['Item']['evaluation'],
        ];
    }
}