<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\Reserve;

use App\Models\Reserve;
use App\Services\RakutenGora\RakutenGoraServiceInterface;
use App\UseCases\Reserve\ShowAction;
use Tests\TestCase;
use Tests\Traits\UsesRakutenGoraMockTrait;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ShowActionTest extends TestCase
{
    use RefreshDatabase;
    use UsesRakutenGoraMockTrait;

    private ShowAction $showAction;
    private RakutenGoraServiceInterface $rakutenGoraMock;

    protected function setUp(): void
    {
        parent::setUp();
        $this->setUpRakutenGoraMock();
        $this->showAction = app()->make(ShowAction::class);
        $this->rakutenGoraMock = app()->make(RakutenGoraServiceInterface::class);
    }

    /**
     * @test
     */
    public function 予約情報とゴルフ場情報を取得できる(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create([
            'golf_course_id' => '1234',
            'start_date' => '2024-01-01',
            'name' => 'テストユーザー',
            'email' => 'test@example.com',
            'person_count' => 4,
            'status_id' => 1,
        ]);

        // 実行
        $result = $this->showAction->__invoke($reserve);

        // 予約情報の検証
        $this->assertEquals('1234', $result->golf_course_id);
        $this->assertEquals('2024-01-01', $result->start_date->format('Y-m-d'));
        $this->assertEquals('テストユーザー', $result->name);
        $this->assertEquals('test@example.com', $result->email);
        $this->assertEquals(4, $result->person_count);
        $this->assertEquals(1, $result->status_id);

        // ゴルフ場情報の検証
        $this->assertArrayHasKey('Item', $result->golf_course);
        $golfCourse = $result->golf_course['Item'];
        $this->assertEquals('1234', $golfCourse['golfCourseId']);
        $this->assertArrayHasKey('golfCourseName', $golfCourse);
        $this->assertArrayHasKey('address', $golfCourse);
    }

    /**
     * @test
     */
    public function 予約情報に全ての必要な属性が含まれている(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create();

        // 実行
        $result = $this->showAction->__invoke($reserve);

        // 必須属性の存在確認
        $requiredAttributes = [
            'id',
            'golf_course_id',
            'start_date',
            'name',
            'email',
            'person_count',
            'status_id',
            'created_at',
            'updated_at',
            'golf_course',
        ];

        foreach ($requiredAttributes as $attribute) {
            $this->assertTrue(isset($result->{$attribute}));
        }
    }

    /**
     * @test
     */
    public function ゴルフ場情報に全ての必要な属性が含まれている(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create();

        // 実行
        $result = $this->showAction->__invoke($reserve);

        // ゴルフ場情報の必須フィールドを検証
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
        ];

        foreach ($requiredFields as $field) {
            $this->assertArrayHasKey($field, $result->golf_course['Item']);
        }
    }

    /**
     * @test
     */
    public function 日付形式が正しく処理される(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create([
            'start_date' => '2024-12-31',
        ]);

        // 実行
        $result = $this->showAction->__invoke($reserve);

        // 日付形式の検証
        $this->assertEquals('2024-12-31', $result->start_date->format('Y-m-d'));
        $this->assertInstanceOf(\DateTime::class, $result->start_date);
    }
}