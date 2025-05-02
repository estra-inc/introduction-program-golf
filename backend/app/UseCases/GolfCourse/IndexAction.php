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
        ?int $page = 1,
        ?string $keyword = null,
        ?int $areaCode = null,
        ?float $latitude = null,
        ?float $longitude = null,
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