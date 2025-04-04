<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\Reserve;

use App\Models\Reserve;
use App\UseCases\Reserve\ShowAction;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ShowActionTest extends TestCase
{
    use RefreshDatabase;

    private ShowAction $showAction;

    protected function setUp(): void
    {
        parent::setUp();
        $this->showAction = new ShowAction;
    }

    /**
     * @test
     */
    public function 予約情報を取得できること(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create([
            'start_date' => Carbon::parse('2024-01-01'),
            'guest_name' => 'テストユーザー',
            'guest_email' => 'test@example.com',
            'person_count' => 4,
            'status_id' => 1,
            'golf_course_name' => 'テストゴルフ場',
            'golf_course_image_url1' => 'https://example.com/image1.jpg',
            'golf_course_image_url2' => 'https://example.com/image2.jpg',
            'golf_course_image_url3' => 'https://example.com/image3.jpg',
            'golf_course_image_url4' => 'https://example.com/image4.jpg',
            'golf_course_image_url5' => 'https://example.com/image5.jpg',

        ]);

        // 実行
        $result = ($this->showAction)($reserve);

        // 予約情報の検証
        $this->assertEquals($reserve->start_date, $result->start_date);
        $this->assertEquals($reserve->guest_name, $result->guest_name);
        $this->assertEquals($reserve->guest_email, $result->guest_email);
        $this->assertEquals($reserve->person_count, $result->person_count);
        $this->assertEquals($reserve->status_id, $result->status_id);
        $this->assertEquals($reserve->golf_course_name, $result->golf_course_name);
        $this->assertEquals($reserve->golf_course_image_url1, $result->golf_course_image_url1);
        $this->assertEquals($reserve->golf_course_image_url2, $result->golf_course_image_url2);
        $this->assertEquals($reserve->golf_course_image_url3, $result->golf_course_image_url3);
        $this->assertEquals($reserve->golf_course_image_url4, $result->golf_course_image_url4);
        $this->assertEquals($reserve->golf_course_image_url5, $result->golf_course_image_url5);
    }
}
