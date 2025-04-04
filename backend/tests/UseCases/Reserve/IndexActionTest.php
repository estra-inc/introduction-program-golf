<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\Reserve;

use App\Models\Reserve;
use App\UseCases\Reserve\IndexAction;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class IndexActionTest extends TestCase
{
    use RefreshDatabase;

    private IndexAction $indexAction;

    protected function setUp(): void
    {
        parent::setUp();
        $this->indexAction = new IndexAction;
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
    public function 予約データが作成日時の降順でソートされている(): void
    {
        // テストデータ作成
        $oldReserve = Reserve::factory()->create([
            'created_at' => now()->subDays(2),
        ]);
        $newReserve = Reserve::factory()->create([
            'created_at' => now()->subDay(),
        ]);
        $latestReserve = Reserve::factory()->create([
            'created_at' => now(),
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
}
