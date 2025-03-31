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
        string $guestName,
        string $guestEmail,
        int $personCount
    ): void {
        Reserve::create([
            'golf_course_id' => $golfCourseId,
            'start_date' => $startDate,
            'guest_name' => $guestName,
            'guest_email' => $guestEmail,
            'person_count' => $personCount,
            'status_id' => ReserveStatus::PENDING->value,
        ]);
    }
}
