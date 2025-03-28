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
                    'golfCourseName' => $item['Item']['golfCourseName'],
                    'golfCourseAbbr' => $item['Item']['golfCourseAbbr'],
                    'golfCourseNameKana' => $item['Item']['golfCourseNameKana'],
                    'golfCourseCaption' => $item['Item']['golfCourseCaption'],
                    'address' => $item['Item']['address'],
                    'latitude' => $item['Item']['latitude'],
                    'longitude' => $item['Item']['longitude'],
                    'highway' => $item['Item']['highway'],
                    'golfCourseDetailUrl' => $item['Item']['golfCourseDetailUrl'],
                    'reserveCalUrl' => $item['Item']['reserveCalUrl'],
                    'ratingUrl' => $item['Item']['ratingUrl'],
                    'golfCourseImageUrl' => $item['Item']['golfCourseImageUrl'],
                    'evaluation' => $item['Item']['evaluation'],
                ];
            }, $this['Items']),
        ];
    }
}
