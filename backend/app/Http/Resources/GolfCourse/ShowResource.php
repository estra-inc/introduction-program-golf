<?php

declare(strict_types=1);

namespace App\Http\Resources\GolfCourse;

use Illuminate\Http\Resources\Json\JsonResource;

class ShowResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'carrier' => $this['Item']['carrier'],
            'golfCourseId' => $this['Item']['golfCourseId'],
            'golfCourseName' => $this['Item']['golfCourseName'],
            'golfCourseAbbr' => $this['Item']['golfCourseAbbr'],
            'golfCourseNameKana' => $this['Item']['golfCourseNameKana'],
            'golfCourseCaption' => $this['Item']['golfCourseCaption'],
            'information' => $this['Item']['information'],
            'highway' => $this['Item']['highway'],
            'ic' => $this['Item']['ic'],
            'icDistance' => $this['Item']['icDistance'],
            'latitude' => $this['Item']['latitude'],
            'longitude' => $this['Item']['longitude'],
            'postalCode' => $this['Item']['postalCode'],
            'address' => $this['Item']['address'],
            'telephoneNo' => $this['Item']['telephoneNo'],
            'faxNo' => $this['Item']['faxNo'],
            'openDay' => $this['Item']['openDay'],
            'closeDay' => $this['Item']['closeDay'],
            'creditCard' => $this['Item']['creditCard'],
            'shoes' => $this['Item']['shoes'],
            'dressCode' => $this['Item']['dressCode'],
            'practiceFacility' => $this['Item']['practiceFacility'],
            'lodgingFacility' => $this['Item']['lodgingFacility'],
            'otherFacility' => $this['Item']['otherFacility'],
            'golfCourseImageUrl1' => $this['Item']['golfCourseImageUrl1'],
            'golfCourseImageUrl2' => $this['Item']['golfCourseImageUrl2'],
            'golfCourseImageUrl3' => $this['Item']['golfCourseImageUrl3'],
            'golfCourseImageUrl4' => $this['Item']['golfCourseImageUrl4'],
            'golfCourseImageUrl5' => $this['Item']['golfCourseImageUrl5'],
            'weekdayMinPrice' => $this['Item']['weekdayMinPrice'],
            'baseWeekdayMinPrice' => $this['Item']['baseWeekdayMinPrice'],
            'holidayMinPrice' => $this['Item']['holidayMinPrice'],
            'baseHolidayMinPrice' => $this['Item']['baseHolidayMinPrice'],
            'designer' => $this['Item']['designer'],
            'courseType' => $this['Item']['courseType'],
            'courseVerticalInterval' => $this['Item']['courseVerticalInterval'],
            'dimension' => $this['Item']['dimension'],
            'green' => $this['Item']['green'],
            'greenCount' => $this['Item']['greenCount'],
            'holeCount' => $this['Item']['holeCount'],
            'parCount' => $this['Item']['parCount'],
            'courseName' => $this['Item']['courseName'],
            'courseDistance' => $this['Item']['courseDistance'],
            'longDrivingContest' => $this['Item']['longDrivingContest'],
            'nearPin' => $this['Item']['nearPin'],
            'ratingNum' => $this['Item']['ratingNum'],
            'evaluation' => $this['Item']['evaluation'],
            'staff' => $this['Item']['staff'],
            'facility' => $this['Item']['facility'],
            'meal' => $this['Item']['meal'],
            'course' => $this['Item']['course'],
            'costperformance' => $this['Item']['costperformance'],
            'distance' => $this['Item']['distance'],
            'fairway' => $this['Item']['fairway'],
            'reserveCalUrl' => $this['Item']['reserveCalUrl'],
            'voiceUrl' => $this['Item']['voiceUrl'],
            'layoutUrl' => $this['Item']['layoutUrl'],
            'routeMapUrl' => $this['Item']['routeMapUrl'],
            'newPlans' => $this['Item']['newPlans'],
            'ratings' => $this['Item']['ratings'],
        ];
    }
}
