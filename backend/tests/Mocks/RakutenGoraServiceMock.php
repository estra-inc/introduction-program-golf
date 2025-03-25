<?php

declare(strict_types=1);

namespace Tests\Mocks;

use App\Services\RakutenGora\Exceptions\RequiredParameterMissingException;
use App\Services\RakutenGora\RakutenGoraServiceInterface;
use Database\Factories\GolfCourseFactory;

/**
 * RakutenGoraServiceのMock
 */
class RakutenGoraServiceMock implements RakutenGoraServiceInterface
{
    private const DEFAULT_ITEMS_COUNT = 20;

    /**
     * ゴルフ場一覧を取得
     */
    public function searchGolfCourses(
        string|int $page = 1,
        string|null $keyword = null,
        string|int|null $areaCode = null,
        string|int|null $latitude = null,
        string|int|null $longitude = null
    ): array {
        if (!$keyword && !$areaCode && !($latitude && $longitude)) {
            throw new RequiredParameterMissingException();
        }

        $itemsCount = self::DEFAULT_ITEMS_COUNT;
        $items = [];

        // ページネーションを考慮したデータ生成
        $startIndex = ($page - 1) * $itemsCount;
        for ($i = 0; $i < $itemsCount; $i++) {
            $items[] = [
                'Item' => GolfCourseFactory::create([
                    'golfCourseId' => (string)($startIndex + $i + 1)
                ])
            ];
        }

        // キーワード検索のシミュレーション
        if ($keyword) {
            $items = array_filter($items, function ($item) use ($keyword) {
                return str_contains($item['Item']['golfCourseName'], $keyword) ||
                    str_contains($item['Item']['address'], $keyword);
            });
        }

        // エリア検索のシミュレーション
        if ($areaCode) {
            $items = array_filter($items, function ($item) use ($areaCode) {
                return $item['Item']['areaCode'] === $areaCode;
            });
        }

        $totalCount = count($items);

        return [
            'count' => $totalCount,
            'page' => $page,
            'first' => ($page - 1) * $itemsCount + 1,
            'last' => min($page * $itemsCount, $totalCount),
            'hits' => $totalCount,
            'carrier' => 'TEST',
            'pageCount' => ceil($totalCount / $itemsCount),
            'Items' => array_values($items)
        ];
    }

    /**
     * ゴルフ場詳細を取得
     */
    public function getGolfCourse(string|int $golfCourseId): array
    {
        // 基本情報の生成
        $basicInfo = GolfCourseFactory::create(['golfCourseId' => $golfCourseId, 'detailed' => false]);

        return [
            'Item' => $basicInfo
        ];
    }
}