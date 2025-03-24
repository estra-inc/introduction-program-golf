<?php

declare(strict_types=1);

namespace App\UseCases\Reserve;

use App\Models\Reserve;
use App\Services\RakutenGora\RakutenGoraServiceInterface;

class ShowAction
{
    private RakutenGoraServiceInterface $rakutenGoraService;

    public function __construct(RakutenGoraServiceInterface $rakutenGoraService)
    {
        $this->rakutenGoraService = $rakutenGoraService;
    }

    public function __invoke(Reserve $reserve): Reserve
    {
        \Log::info($reserve);
        $golfCourse = $this->rakutenGoraService->getGolfCourse($reserve->golf_course_id);
        $reserve->golf_course = $golfCourse;
        return $reserve;
    }
}
