<?php

declare(strict_types=1);

namespace App\UseCases\GolfCourse;

use App\Services\RakutenGora\RakutenGoraServiceInterface;

class ShowAction
{
    private RakutenGoraServiceInterface $rakutenGoraService;

    public function __construct(RakutenGoraServiceInterface $rakutenGoraService)
    {
        $this->rakutenGoraService = $rakutenGoraService;
    }

    public function __invoke(string $golfCourseId)
    {
        return $this->rakutenGoraService->getGolfCourse($golfCourseId);
    }
}
