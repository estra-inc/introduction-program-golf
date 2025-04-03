<?php

declare(strict_types=1);

namespace App\UseCases\Reserve;

use App\Enums\ReserveStatus;
use App\Models\Reserve;

class StoreAction
{
    public function __invoke(
        string $startDate,
        string $guestName,
        string $guestEmail,
        int $personCount,
        string $golfCourseName,
        string $golfCourseImageUrl1,
        string $golfCourseImageUrl2,
        string $golfCourseImageUrl3,
        string $golfCourseImageUrl4,
        string $golfCourseImageUrl5
    ): void {
        Reserve::create([
            'start_date' => $startDate,
            'guest_name' => $guestName,
            'guest_email' => $guestEmail,
            'person_count' => $personCount,
            'status_id' => ReserveStatus::REQUESTED->value,
            'golf_course_name' => $golfCourseName,
            'golf_course_image_url1' => $golfCourseImageUrl1,
            'golf_course_image_url2' => $golfCourseImageUrl2,
            'golf_course_image_url3' => $golfCourseImageUrl3,
            'golf_course_image_url4' => $golfCourseImageUrl4,
            'golf_course_image_url5' => $golfCourseImageUrl5,
        ]);
    }
}
