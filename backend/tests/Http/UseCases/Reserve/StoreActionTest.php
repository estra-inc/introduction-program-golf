<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\Reserve;

use App\Models\Reserve;
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
        $this->storeAction = app()->make(StoreAction::class);
    }

    /**
     * @test
     */
    public function 予約を作成できる(): void
    {
        // テストデータ
        $golfCourseId = '12345';
        $startDate = '2024-03-20';
        $name = 'テスト太郎';
        $email = 'test@example.com';
        $personCount = 4;

        // 実行
        $this->storeAction->__invoke(
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

    /**
     * @test
     */
    public function 予約作成時に必須項目が正しく保存される(): void
    {
        // テストデータ
        $golfCourseId = '12345';
        $startDate = '2024-03-20';
        $name = 'テスト太郎';
        $email = 'test@example.com';
        $personCount = 4;

        // 実行
        $this->storeAction->__invoke(
            $golfCourseId,
            $startDate,
            $name,
            $email,
            $personCount
        );

        // 検証
        $reserve = Reserve::first();
        $this->assertNotNull($reserve->id);
        $this->assertNotNull($reserve->created_at);
        $this->assertNotNull($reserve->updated_at);
        $this->assertEquals($golfCourseId, $reserve->golf_course_id);
        $this->assertEquals($startDate, $reserve->start_date->format('Y-m-d'));
        $this->assertEquals($name, $reserve->name);
        $this->assertEquals($email, $reserve->email);
        $this->assertEquals($personCount, $reserve->person_count);
        $this->assertEquals(1, $reserve->status_id);
    }

    /**
     * @test
     */
    public function 複数の予約を作成できる(): void
    {
        // テストデータ
        $reserves = [
            [
                'golf_course_id' => '12345',
                'start_date' => '2024-03-20',
                'name' => 'テスト太郎',
                'email' => 'test1@example.com',
                'person_count' => 4,
            ],
            [
                'golf_course_id' => '67890',
                'start_date' => '2024-03-21',
                'name' => 'テスト花子',
                'email' => 'test2@example.com',
                'person_count' => 2,
            ],
        ];

        // 実行
        foreach ($reserves as $reserve) {
            $this->storeAction->__invoke(
                $reserve['golf_course_id'],
                $reserve['start_date'],
                $reserve['name'],
                $reserve['email'],
                $reserve['person_count']
            );
        }

        // 検証
        $this->assertDatabaseCount('reserves', 2);
        foreach ($reserves as $reserve) {
            $this->assertDatabaseHas('reserves', [
                'golf_course_id' => $reserve['golf_course_id'],
                'start_date' => $reserve['start_date'],
                'name' => $reserve['name'],
                'email' => $reserve['email'],
                'person_count' => $reserve['person_count'],
                'status_id' => 1,
            ]);
        }
    }

    /**
     * @test
     */
    public function 予約作成時に数値が正しく保存される(): void
    {
        // テストデータ
        $golfCourseId = '12345';
        $startDate = '2024-03-20';
        $name = 'テスト太郎';
        $email = 'test@example.com';
        $personCount = '4'; // 文字列として渡す

        // 実行
        $this->storeAction->__invoke(
            $golfCourseId,
            $startDate,
            $name,
            $email,
            $personCount
        );

        // 検証
        $reserve = Reserve::first();
        $this->assertIsInt($reserve->person_count);
        $this->assertEquals(4, $reserve->person_count);
    }
}