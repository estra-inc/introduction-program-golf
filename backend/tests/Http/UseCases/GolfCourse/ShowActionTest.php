<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\GolfCourse;

use App\UseCases\GolfCourse\ShowAction;
use Tests\TestCase;
use Tests\Traits\UsesRakutenGoraMockTrait;

class ShowActionTest extends TestCase
{
    use UsesRakutenGoraMockTrait;

    private ShowAction $showAction;

    protected function setUp(): void
    {
        parent::setUp();
        $this->setUpRakutenGoraMock();
        $this->showAction = app()->make(ShowAction::class);
    }

    /**
     * @test
     */
    public function ゴルフ場の詳細情報を取得できる(): void
    {
        // 実行
        $result = $this->showAction->__invoke('1');

        // 構造の検証
        $this->assertArrayHasKey('Item', $result);
        $golfCourse = $result['Item'];

        // IDの検証
        $this->assertEquals('1', $golfCourse['golfCourseId']);

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
            'evaluation',
            'areaCode'
        ];

        foreach ($requiredFields as $field) {
            $this->assertArrayHasKey($field, $golfCourse);
            $this->assertNotNull($golfCourse[$field]);
        }

        // データ型の検証
        $this->assertIsString($golfCourse['golfCourseId']);
        $this->assertIsString($golfCourse['golfCourseName']);
        $this->assertIsString($golfCourse['golfCourseAbbr']);
        $this->assertIsString($golfCourse['golfCourseNameKana']);
        $this->assertIsString($golfCourse['golfCourseCaption']);
        $this->assertIsString($golfCourse['address']);
        $this->assertIsString($golfCourse['latitude']);
        $this->assertIsString($golfCourse['longitude']);
        $this->assertIsString($golfCourse['highway']);
        $this->assertIsString($golfCourse['golfCourseDetailUrl']);
        $this->assertIsString($golfCourse['reserveCalUrl']);
        $this->assertIsString($golfCourse['ratingUrl']);
        $this->assertIsString($golfCourse['golfCourseImageUrl']);
        $this->assertIsString($golfCourse['evaluation']);
        $this->assertIsString($golfCourse['areaCode']);
    }

    /**
     * @test
     */
    public function 数値型のIDでゴルフ場の詳細情報を取得できる(): void
    {
        // 実行
        $result = $this->showAction->__invoke(1);

        // 構造の検証
        $this->assertArrayHasKey('Item', $result);
        $golfCourse = $result['Item'];

        // IDの検証（文字列型に変換されていることを確認）
        $this->assertEquals('1', $golfCourse['golfCourseId']);
    }

    /**
     * @test
     */
    public function エリアコードが都道府県の範囲内である(): void
    {
        $result = $this->showAction->__invoke('1');
        $areaCode = (int)$result['Item']['areaCode'];

        // エリアコードが1-47（都道府県コード）の範囲内であることを確認
        $this->assertGreaterThanOrEqual(1, $areaCode);
        $this->assertLessThanOrEqual(47, $areaCode);
    }

    /**
     * @test
     */
    public function 緯度経度が日本国内の範囲である(): void
    {
        $result = $this->showAction->__invoke('1');
        $latitude = (float)$result['Item']['latitude'];
        $longitude = (float)$result['Item']['longitude'];

        // 緯度が日本国内の範囲（おおよそ20-46度）内であることを確認
        $this->assertGreaterThanOrEqual(20.0, $latitude);
        $this->assertLessThanOrEqual(46.0, $latitude);

        // 経度が日本国内の範囲（おおよそ122-154度）内であることを確認
        $this->assertGreaterThanOrEqual(122.0, $longitude);
        $this->assertLessThanOrEqual(154.0, $longitude);
    }
}