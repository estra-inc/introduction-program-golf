<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\Reserve;

use App\Models\Reserve;
use App\UseCases\Reserve\IndexAction;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class IndexActionTest extends TestCase
{
    use RefreshDatabase;

    private IndexAction $indexAction;

    protected function setUp(): void
    {
        parent::setUp();
        $this->indexAction = app()->make(IndexAction::class);
    }

    /**
     * @test
     */
    public function 予約一覧を取得できる(): void
    {
        // テストデータ作成
        Reserve::factory()->count(3)->create();

        // 実行
        $result = ($this->indexAction)(1, 10);

        // 検証
        $this->assertCount(3, $result);
        $this->assertEquals(3, $result->total());

        foreach ($result as $reserve) {
            $this->assertInstanceOf(Reserve::class, $reserve);
            $this->assertNotNull($reserve->id);
            $this->assertNotNull($reserve->golf_course_id);
            $this->assertNotNull($reserve->start_date);
            $this->assertNotNull($reserve->name);
            $this->assertNotNull($reserve->email);
            $this->assertNotNull($reserve->person_count);
        }
    }

    /**
     * @test
     */
    public function ページネーションが正しく動作する(): void
    {
        // テストデータ作成
        Reserve::factory()->count(15)->create();

        // 1ページ目（10件）
        $page1Result = ($this->indexAction)(1, 10);
        $this->assertCount(10, $page1Result);
        $this->assertEquals(15, $page1Result->total());
        $this->assertEquals(1, $page1Result->currentPage());

        // 2ページ目（5件）
        $page2Result = ($this->indexAction)(2, 10);
        $this->assertCount(5, $page2Result);
        $this->assertEquals(15, $page2Result->total());
        $this->assertEquals(2, $page2Result->currentPage());
    }

    /**
     * @test
     */
    public function 予約が存在しない場合は空の結果が返る(): void
    {
        // 実行
        $result = ($this->indexAction)(1, 10);

        // 検証
        $this->assertCount(0, $result);
        $this->assertEquals(0, $result->total());
    }

    /**
     * @test
     */
    public function 指定したページが存在しない場合は空の結果が返る(): void
    {
        // テストデータ作成
        Reserve::factory()->count(5)->create();

        // 実行（存在しない3ページ目を指定）
        $result = ($this->indexAction)(3, 10);

        // 検証
        $this->assertCount(0, $result);
        $this->assertEquals(5, $result->total());
        $this->assertEquals(3, $result->currentPage());
    }

    /**
     * @test
     */
    public function リミット値を変更して取得できる(): void
    {
        // テストデータ作成
        Reserve::factory()->count(7)->create();

        // リミット5で実行
        $result = ($this->indexAction)(1, 5);

        // 検証
        $this->assertCount(5, $result);
        $this->assertEquals(7, $result->total());
        $this->assertEquals(1, $result->currentPage());
        $this->assertEquals(5, $result->perPage());
    }

    /**
     * @test
     */
    public function 予約データが作成日時の降順でソートされている(): void
    {
        // テストデータ作成
        $oldReserve = Reserve::factory()->create([
            'created_at' => now()->subDays(2)
        ]);
        $newReserve = Reserve::factory()->create([
            'created_at' => now()->subDay()
        ]);
        $latestReserve = Reserve::factory()->create([
            'created_at' => now()
        ]);

        // 実行
        $result = ($this->indexAction)(1, 10);

        // 検証
        $this->assertCount(3, $result);
        $reserves = $result->items();
        $this->assertEquals($latestReserve->id, $reserves[0]->id);
        $this->assertEquals($newReserve->id, $reserves[1]->id);
        $this->assertEquals($oldReserve->id, $reserves[2]->id);
    }

    /**
     * @test
     */
    public function 予約データに必要な属性が含まれている(): void
    {
        // テストデータ作成
        Reserve::factory()->create([
            'golf_course_id' => '123',
            'start_date' => '2024-01-01',
            'name' => 'テストユーザー',
            'email' => 'test@example.com',
            'person_count' => 4,
        ]);

        // 実行
        $result = ($this->indexAction)(1, 10);

        // 検証
        $this->assertCount(1, $result);
        $reserve = $result->first();

        $this->assertEquals('123', $reserve->golf_course_id);
        $this->assertEquals('2024-01-01', $reserve->start_date->format('Y-m-d'));
        $this->assertEquals('テストユーザー', $reserve->name);
        $this->assertEquals('test@example.com', $reserve->email);
        $this->assertEquals(4, $reserve->person_count);
    }
}