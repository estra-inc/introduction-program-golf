<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\GolfCourse;

use App\Services\RakutenGora\Exceptions\RequiredParameterMissingException;
use App\UseCases\GolfCourse\IndexAction;
use Tests\Traits\UsesRakutenGoraMockTrait;
use Tests\TestCase;

class IndexActionTest extends TestCase
{
    use UsesRakutenGoraMockTrait;

    private IndexAction $indexAction;

    protected function setUp(): void
    {
        parent::setUp();
        $this->setUpRakutenGoraMock();
        $this->indexAction = app()->make(IndexAction::class);
    }

    /**
     * @test
     */
    public function キーワードで検索できる(): void
    {
        // 実行
        $result = $this->indexAction->__invoke(
            page: 1,
            keyword: '富士山',
            areaCode: null,
            latitude: null,
            longitude: null
        );

        // 構造の検証
        $this->assertArrayHasKey('Items', $result);
        $this->assertArrayHasKey('count', $result);
        $this->assertArrayHasKey('page', $result);
        $this->assertArrayHasKey('first', $result);
        $this->assertArrayHasKey('last', $result);
        $this->assertArrayHasKey('hits', $result);
        $this->assertArrayHasKey('carrier', $result);
        $this->assertArrayHasKey('pageCount', $result);

        // 検索結果の検証
        foreach ($result['Items'] as $item) {
            $this->assertArrayHasKey('Item', $item);
            $golfCourse = $item['Item'];

            // キーワードを含むことを確認
            $this->assertTrue(
                str_contains($golfCourse['golfCourseName'], '富士山') ||
                str_contains($golfCourse['address'], '富士山')
            );
        }
    }

    /**
     * @test
     */
    public function エリアコードで検索できる(): void
    {
        // 実行
        $result = $this->indexAction->__invoke(
            page: 1,
            keyword: null,
            areaCode: '13', // 東京都
            latitude: null,
            longitude: null
        );

        // 検索結果の検証
        foreach ($result['Items'] as $item) {
            $this->assertArrayHasKey('Item', $item);
            $this->assertEquals('13', $item['Item']['areaCode']);
        }
    }

    /**
     * @test
     */
    public function 位置情報で検索できる(): void
    {
        // 実行
        $result = $this->indexAction->__invoke(
            page: 1,
            keyword: null,
            areaCode: null,
            latitude: '35.681236',
            longitude: '139.767125'
        );

        // 検索結果の検証
        $this->assertNotEmpty($result['Items']);
        foreach ($result['Items'] as $item) {
            $this->assertArrayHasKey('Item', $item);
            $this->assertArrayHasKey('latitude', $item['Item']);
            $this->assertArrayHasKey('longitude', $item['Item']);
        }
    }

    /**
     * @test
     */
    public function ページネーションが正しく動作する(): void
    {
        // 1ページ目
        $page1Result = $this->indexAction->__invoke(
            page: 1,
            keyword: '富士山',
            areaCode: null,
            latitude: null,
            longitude: null
        );

        // 2ページ目
        $page2Result = $this->indexAction->__invoke(
            page: 2,
            keyword: '富士山',
            areaCode: null,
            latitude: null,
            longitude: null
        );

        // ページ番号の検証
        $this->assertEquals(1, $page1Result['page']);
        $this->assertEquals(2, $page2Result['page']);

        // IDの連続性を確認
        $lastIdOfPage1 = (int)end($page1Result['Items'])['Item']['golfCourseId'];
        $firstIdOfPage2 = (int)reset($page2Result['Items'])['Item']['golfCourseId'];
        $this->assertGreaterThan($lastIdOfPage1, $firstIdOfPage2);
    }

    /**
     * @test
     */
    public function 検索条件が指定されていない場合は例外が発生する(): void
    {
        $this->expectException(RequiredParameterMissingException::class);

        $this->indexAction->__invoke(
            page: 1,
            keyword: null,
            areaCode: null,
            latitude: null,
            longitude: null
        );
    }

    /**
     * @test
     */
    public function 検索結果のゴルフ場情報が正しい形式である(): void
    {
        $result = $this->indexAction->__invoke(
            page: 1,
            keyword: '富士山',
            areaCode: null,
            latitude: null,
            longitude: null
        );

        foreach ($result['Items'] as $item) {
            $golfCourse = $item['Item'];

            // 必須フィールドの存在確認
            $requiredFields = [
                'golfCourseId',
                'golfCourseName',
                'golfCourseAbbr',
                'golfCourseNameKana',
                'golfCourseCaption',
                'address',
                'latitude',
                'longitude',
                'highway',
                'golfCourseDetailUrl',
                'reserveCalUrl',
                'ratingUrl',
                'golfCourseImageUrl',
                'evaluation'
            ];

            foreach ($requiredFields as $field) {
                $this->assertArrayHasKey($field, $golfCourse);
                $this->assertNotNull($golfCourse[$field]);
            }

            // データ型の検証
            $this->assertIsString($golfCourse['golfCourseId']);
            $this->assertIsString($golfCourse['golfCourseName']);
            $this->assertIsString($golfCourse['evaluation']);

            // 評価値の範囲チェック
            $this->assertGreaterThanOrEqual(1.0, (float)$golfCourse['evaluation']);
            $this->assertLessThanOrEqual(5.0, (float)$golfCourse['evaluation']);
        }
    }
}