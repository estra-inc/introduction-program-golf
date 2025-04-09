<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\GolfCourse;

use App\Services\RakutenGora\RakutenGoraService;
use App\UseCases\GolfCourse\ShowAction;
use Database\Factories\GolfCourseFactory;
use Mockery;
use Tests\TestCase;

class ShowActionTest extends TestCase
{
    private ShowAction $showAction;

    private RakutenGoraService $rakutenGoraService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->rakutenGoraService = Mockery::mock(RakutenGoraService::class);
        $this->showAction = new ShowAction($this->rakutenGoraService);
    }

    /**
     * @test
     */
    public function ゴルフ場の詳細情報を取得できること(): void
    {
        $golfCourse = GolfCourseFactory::create([
            'golfCourseId' => 1,
        ]);

        $this->rakutenGoraService
            ->shouldReceive('getGolfCourse')
            ->with(1)
            ->andReturn([
                'Item' => $golfCourse,
            ]);
        // 実行
        $result = ($this->showAction)(1);

        // IDの検証
        $this->assertEquals(1, $result['Item']['golfCourseId']);
    }
}
