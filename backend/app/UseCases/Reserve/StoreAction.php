<?php

declare(strict_types=1);

namespace App\UseCases\Reserve;

use App\Models\Reserve;

class StoreAction
{
    public function __invoke(
        int|string $golfCourseId,
        string $startDate,
        string $name,
        string $email,
        int|string $personCount
    ): void {
        Reserve::create([
            'golf_course_id' => $golfCourseId,
            'start_date' => $startDate,
            'name' => $name,
            'email' => $email,
            'person_count' => $personCount,
        ]);
    }
}
