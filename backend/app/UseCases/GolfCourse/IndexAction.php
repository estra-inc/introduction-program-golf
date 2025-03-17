<?php

declare(strict_types=1);

namespace App\UseCases\GolfCourse;

use App\Services\RakutenGora\RakutenGoraServiceInterface;

class IndexAction
{
    private RakutenGoraServiceInterface $rakutenGoraService;

    public function __construct(RakutenGoraServiceInterface $rakutenGoraService)
    {
        $this->rakutenGoraService = $rakutenGoraService;
    }

    public function __invoke(
        int|string $page,
        ?string $keyword,
        int|string|null $areaCode,
        int|string|null $latitude,
        int|string|null $longitude,
    ) {
        return $this->rakutenGoraService->searchGolfCourses(
            $page,
            $keyword,
            $areaCode,
            $latitude,
            $longitude
        );
    }
}
