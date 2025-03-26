<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\Reserve;

use App\Models\Reserve;
use App\UseCases\Reserve\DestroyAction;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DestroyActionTest extends TestCase
{
    use RefreshDatabase;

    private DestroyAction $destroyAction;

    protected function setUp(): void
    {
        parent::setUp();
        $this->destroyAction = app()->make(DestroyAction::class);
    }

    /**
     * @test
     */
    public function 予約を削除できる(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create();

        // 実行
        ($this->destroyAction)($reserve);

        // 検証
        $this->assertDatabaseMissing('reserves', [
            'id' => $reserve->id,
        ]);
    }

    /**
     * @test
     */
    public function 複数の予約が存在する場合でも特定の予約のみが削除される(): void
    {
        // テストデータ作成
        $reserve1 = Reserve::factory()->create();
        $reserve2 = Reserve::factory()->create();
        $reserve3 = Reserve::factory()->create();

        // 実行
        ($this->destroyAction)($reserve2);

        // 検証
        $this->assertDatabaseHas('reserves', [
            'id' => $reserve1->id,
        ]);
        $this->assertDatabaseMissing('reserves', [
            'id' => $reserve2->id,
        ]);
        $this->assertDatabaseHas('reserves', [
            'id' => $reserve3->id,
        ]);
    }
}