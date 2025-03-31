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
        $startDate = '2024-03-20';
        $guestName = 'テスト太郎';
        $guestEmail = 'test@example.com';
        $personCount = 4;
        $golfCourseName = 'テストゴルフ場';
        $golfCourseImageUrl1 = 'https://example.com/image1.jpg';
        $golfCourseImageUrl2 = 'https://example.com/image2.jpg';
        $golfCourseImageUrl3 = 'https://example.com/image3.jpg';
        $golfCourseImageUrl4 = 'https://example.com/image4.jpg';
        $golfCourseImageUrl5 = 'https://example.com/image5.jpg';

        // 実行
        ($this->storeAction)(
            $startDate,
            $guestName,
            $guestEmail,
            $personCount,
            $golfCourseName,
            $golfCourseImageUrl1,
            $golfCourseImageUrl2,
            $golfCourseImageUrl3,
            $golfCourseImageUrl4,
            $golfCourseImageUrl5
        );

        // 検証
        $this->assertDatabaseHas('reserves', [
            'start_date' => $startDate,
            'guest_name' => $guestName,
            'guest_email' => $guestEmail,
            'person_count' => $personCount,
            'status_id' => 1,
            'golf_course_name' => $golfCourseName,
            'golf_course_image_url1' => $golfCourseImageUrl1,
            'golf_course_image_url2' => $golfCourseImageUrl2,
            'golf_course_image_url3' => $golfCourseImageUrl3,
            'golf_course_image_url4' => $golfCourseImageUrl4,
            'golf_course_image_url5' => $golfCourseImageUrl5,
        ]);
    }
}