<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\Reserve;

use App\UseCases\Reserve\StoreAction;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class StoreActionTest extends TestCase
{
    use RefreshDatabase;

    private StoreAction $storeAction;

    protected function setUp(): void
    {
        parent::setUp();
        $this->storeAction = new StoreAction();
    }

    /**
     * @test
     */
    public function 予約を作成できること(): void
    {
        // テストデータ
        $golfCourseId = 12345;
        $startDate = '2024-03-20';
        $name = 'テスト太郎';
        $email = 'test@example.com';
        $personCount = 4;

        // 実行
        ($this->storeAction)(
            $golfCourseId,
            $startDate,
            $name,
            $email,
            $personCount
        );

        // 検証
        $this->assertDatabaseHas('reserves', [
            'golf_course_id' => $golfCourseId,
            'start_date' => $startDate,
            'name' => $name,
            'email' => $email,
            'person_count' => $personCount,
            'status_id' => 1,
        ]);
    }
}