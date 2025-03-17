<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class RakutenGoraService
{
    private const BASE_ENDPOINT = 'https://app.rakuten.co.jp/services/api/Gora';
    private string $applicationId;

    public function __construct()
    {
        $this->applicationId = config('services.rakuten_gora.application_id');
    }

    public function searchGolfCourses(
        int $page,
        ?string $keyword,
        ?int $areaCode,
        ?int $latitude,
        ?int $longitude,
    ) {
        $params = [
            'applicationId' => $this->applicationId,
            'page' => $page,
        ];

        if ($keyword) {
            $params['keyword'] = $keyword;
        }

        if ($areaCode) {
            $params['areaCode'] = $areaCode;
        }

        if ($latitude && $longitude) {
            $params['latitude'] = $latitude;
            $params['longitude'] = $longitude;
        }

        $response = Http::get(self::BASE_ENDPOINT . '/GoraGolfCourseSearch/20170623', $params);

        return $response->json();
    }

    public function getGolfCourse(string $golfCourseId)
    {
        return 'Hello World';
    }
}
