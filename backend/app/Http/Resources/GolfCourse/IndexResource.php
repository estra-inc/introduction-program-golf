<?php

declare(strict_types=1);

namespace App\Http\Resources\GolfCourse;

use Illuminate\Http\Resources\Json\JsonResource;

class IndexResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'page' => $this['page'],
            'pageCount' => $this['pageCount'],
            'Items' => array_map(function ($item) {
                return [
                    'golfCourseId' => $item['Item']['golfCourseId'],
                    'golfCourseImageUrl' => $item['Item']['golfCourseImageUrl'],
                    'golfCourseName' => $item['Item']['golfCourseName'],
                    'golfCourseAbbr' => $item['Item']['golfCourseAbbr'],
                    'golfCourseCaption' => $item['Item']['golfCourseCaption'],
                ];
            }, $this['Items']),
        ];
    }
}
