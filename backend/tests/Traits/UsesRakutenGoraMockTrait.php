<?php

declare(strict_types=1);

namespace Tests\Traits;

use App\Services\RakutenGora\Exceptions\RequiredParameterMissingException;
use App\Services\RakutenGora\RakutenGoraServiceInterface;
use Database\Factories\GolfCourseFactory;
use Mockery;
use Mockery\MockInterface;

trait UsesRakutenGoraMockTrait
{
    private const DEFAULT_ITEMS_COUNT = 20;

    protected MockInterface $rakutenGoraService;

    protected function setUpRakutenGoraMock(): void
    {
        $this->rakutenGoraService = Mockery::mock(RakutenGoraServiceInterface::class);


        $this->rakutenGoraService
            ->shouldReceive('searchGolfCourses')
            ->byDefault()
            ->andReturnUsing(function ($page, $keyword, $areaCode, $latitude, $longitude) {
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
            });

        $this->rakutenGoraService
            ->shouldReceive('getGolfCourse')
            ->byDefault()
            ->andReturnUsing(function ($id) {
                return GolfCourseFactory::create(['golfCourseId' => $id, 'detailed' => true]);
            });

        // コンテナにモックを登録
        app()->instance(RakutenGoraServiceInterface::class, $this->rakutenGoraService);
    }
}