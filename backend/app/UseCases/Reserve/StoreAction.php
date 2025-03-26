<?php

declare(strict_types=1);

namespace App\UseCases\Reserve;

use App\Enums\ReserveStatus;
use App\Models\Reserve;

// TODO: ゴルフ場の予約情報も保存できるようにする
class StoreAction
{
    public function __invoke(
        int $golfCourseId,
        string $startDate,
        string $name,
        string $email,
        int $personCount
    ): void {
        Reserve::create([
            'golf_course_id' => $golfCourseId,
            'start_date' => $startDate,
            'name' => $name,
            'email' => $email,
            'person_count' => $personCount,
            'status_id' => ReserveStatus::PENDING->value,
        ]);
    }
}
