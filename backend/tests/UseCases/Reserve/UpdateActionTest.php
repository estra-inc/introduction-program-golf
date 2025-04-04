<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\Reserve;

use App\Enums\ReserveStatus;
use App\Models\Reserve;
use App\UseCases\Reserve\UpdateAction;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UpdateActionTest extends TestCase
{
    use RefreshDatabase;

    private UpdateAction $updateAction;

    protected function setUp(): void
    {
        parent::setUp();
        $this->updateAction = app()->make(UpdateAction::class);
    }

    /**
     * @test
     */
    public function 予約情報を更新できること(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create([
            'status_id' => ReserveStatus::REQUESTED->value,
        ]);

        // 実行
        ($this->updateAction)($reserve, [
            'status_id' => ReserveStatus::CONFIRMED->value,
        ]);

        // 検証
        $this->assertEquals(
            ReserveStatus::CONFIRMED->value,
            $reserve->fresh()->status_id
        );
    }

    /**
     * @test
     */
    public function 無効なstatus_idを指定した場合は例外が発生すること(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create([
            'status_id' => ReserveStatus::REQUESTED->value,
        ]);

        // 検証
        $this->expectException(\Exception::class);
        $this->expectExceptionMessage('Invalid status 999');

        // 実行
        ($this->updateAction)($reserve, [
            'status_id' => 999,
        ]);
    }

    /**
     * @test
     */
    public function 更新するデータが指定されていない場合は更新されないこと(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create([
            'status_id' => ReserveStatus::REQUESTED->value,
        ]);

        // 実行
        ($this->updateAction)($reserve, []);

        // 検証
        $this->assertEquals(
            ReserveStatus::REQUESTED->value,
            $reserve->fresh()->status_id
        );
    }
}
