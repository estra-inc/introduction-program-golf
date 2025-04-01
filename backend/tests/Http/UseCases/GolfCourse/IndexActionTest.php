<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\GolfCourse;

use App\Services\RakutenGora\Exceptions\RequiredParameterMissingException;
use App\Services\RakutenGora\RakutenGoraService;
use App\UseCases\GolfCourse\IndexAction;
use Database\Factories\GolfCourseFactory;
use Mockery;
use Tests\TestCase;

class IndexActionTest extends TestCase
{
    private IndexAction $indexAction;

    private RakutenGoraService $rakutenGoraService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->rakutenGoraService = Mockery::mock(RakutenGoraService::class);
        $this->indexAction = new IndexAction($this->rakutenGoraService);
    }

    /**
     * @test
     */
    public function キーワードで検索できること(): void
    {
        $this->rakutenGoraService
            ->shouldReceive('searchGolfCourses')
            ->with(1, '富士山', null, null, null)
            ->andReturn([
                'Items' => [
                    [
                        'Item' => GolfCourseFactory::create([
                            'golfCourseId' => '1',
                            'golfCourseName' => '富士山に見えるゴルフ場',
                            'address' => '静岡県富士市',
                            'areaCode' => 13,
                        ]),
                    ],
                    [
                        'Item' => GolfCourseFactory::create([
                            'golfCourseId' => '2',
                            'golfCourseName' => '富士山第二ゴルフ場',
                            'address' => '神奈川県箱根市',
                            'areaCode' => 14,
                        ]),
                    ],
                ],
            ]);

        // 実行
        $result = ($this->indexAction)(
            page: 1,
            keyword: '富士山'
        );

        // 検索結果の検証
        foreach ($result['Items'] as $item) {
            // キーワードを含むことを確認
            $this->assertTrue(str_contains($item['Item']['golfCourseName'], '富士山'));
        }
    }

    /**
     * @test
     */
    public function エリアコードで検索できること(): void
    {
        $this->rakutenGoraService
            ->shouldReceive('searchGolfCourses')
            ->with(1, null, 13, null, null)
            ->andReturn([
                'Items' => [
                    [
                        'Item' => GolfCourseFactory::create([
                            'areaCode' => 13,
                        ]),
                    ],
                    [
                        'Item' => GolfCourseFactory::create([
                            'areaCode' => 13,
                        ]),
                    ],
                ],
            ]);

        $areaCode = 13; // 東京都

        // 実行
        $result = ($this->indexAction)(
            page: 1,
            areaCode: $areaCode,
        );

        // 検索結果の検証
        foreach ($result['Items'] as $item) {
            $this->assertEquals($areaCode, $item['Item']['areaCode']);
        }
    }

    /**
     * @test
     */
    public function 位置情報で検索できること(): void
    {
        $this->rakutenGoraService
            ->shouldReceive('searchGolfCourses')
            ->with(1, null, null, 35.681236, 139.767125)
            ->andReturn([
                'Items' => [
                    [
                        'Item' => GolfCourseFactory::create([
                            'latitude' => 35.681236,
                            'longitude' => 139.767125,
                        ]),
                    ],
                    [
                        'Item' => GolfCourseFactory::create([
                            'latitude' => 36.681236,
                            'longitude' => 120.767125,
                        ]),
                    ],
                ],
            ]);

        // 実行
        $result = ($this->indexAction)(
            page: 1,
            latitude: 35.681236,
            longitude: 139.767125
        );

        // 検索結果の検証
        foreach ($result['Items'] as $item) {
            $this->assertArrayHasKey('latitude', $item['Item']);
            $this->assertArrayHasKey('longitude', $item['Item']);
        }
    }

    /**
     * @test
     */
    public function 検索条件が指定されていない場合は例外が発生すること(): void
    {
        $this->rakutenGoraService
            ->shouldReceive('searchGolfCourses')
            ->with(1, null, null, null, null)
            ->once()
            ->andThrow(new RequiredParameterMissingException);

        $this->expectException(RequiredParameterMissingException::class);

        ($this->indexAction)();
    }
}
