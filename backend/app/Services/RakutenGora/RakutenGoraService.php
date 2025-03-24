<?php

namespace App\Services\RakutenGora;

use App\Services\RakutenGora\Exceptions\RequiredParameterMissingException;
use Illuminate\Support\Facades\Http;

class RakutenGoraService implements RakutenGoraServiceInterface
{
    private const BASE_ENDPOINT = 'https://app.rakuten.co.jp/services/api/Gora';
    private string $applicationId;

    public function __construct()
    {
        $this->applicationId = config('services.rakuten_gora.application_id');
    }

    public function searchGolfCourses(
        int|string $page,
        ?string $keyword,
        int|string|null $areaCode,
        int|string|null $latitude,
        int|string|null $longitude,
    ) {
        // NOTE: いずれかのパラメータが存在しない時はエラー
        if (!$keyword && !$areaCode && !($latitude && $longitude)) {
            throw new RequiredParameterMissingException();
        }

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

    public function getGolfCourse(string|int $golfCourseId)
    {
        $params = [
            'applicationId' => $this->applicationId,
            'golfCourseId' => $golfCourseId,
        ];

        $response = Http::get(self::BASE_ENDPOINT . '/GoraGolfCourseDetail/20170623', $params);
        return $response->json();
    }
}
