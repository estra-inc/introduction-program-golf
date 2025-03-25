<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\Reserve;

use App\Enums\ReserveStatus;
use App\Models\Reserve;
use App\UseCases\Reserve\UpdateAction;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

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
    public function 予約のステータスを更新できる(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create([
            'status_id' => ReserveStatus::PENDING->value
        ]);

        // 実行
        $this->updateAction->__invoke($reserve, [
            'status_id' => ReserveStatus::CONFIRMED->value
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
    public function 無効なステータスIDを指定した場合は例外が発生する(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create([
            'status_id' => ReserveStatus::PENDING->value
        ]);

        // 検証
        $this->expectException(\Exception::class);
        $this->expectExceptionMessage('Invalid status 999');

        // 実行
        $this->updateAction->__invoke($reserve, [
            'status_id' => 999
        ]);
    }

    /**
     * @test
     */
    public function ステータスIDが指定されていない場合は更新されない(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create([
            'status_id' => ReserveStatus::PENDING->value
        ]);

        // 実行
        $this->updateAction->__invoke($reserve, []);

        // 検証
        $this->assertEquals(
            ReserveStatus::PENDING->value,
            $reserve->fresh()->status_id
        );
    }

    /**
     * @test
     */
    public function 全ての有効なステータスに更新できる(): void
    {
        // テストデータ作成
        $reserve = Reserve::factory()->create([
            'status_id' => ReserveStatus::PENDING->value
        ]);

        // 全ての有効なステータスでテスト
        foreach (ReserveStatus::cases() as $status) {
            // 実行
            $this->updateAction->__invoke($reserve, [
                'status_id' => $status->value
            ]);

            // 検証
            $this->assertEquals(
                $status->value,
                $reserve->fresh()->status_id
            );
        }
    }

    /**
     * @test
     */
    public function 更新前後で他の属性は変更されない(): void
    {
        // テストデータ作成
        $originalData = [
            'golf_course_id' => '123',
            'start_date' => '2024-01-01',
            'name' => 'テストユーザー',
            'email' => 'test@example.com',
            'person_count' => 4,
            'status_id' => ReserveStatus::PENDING->value
        ];

        $reserve = Reserve::factory()->create($originalData);

        // 実行
        $this->updateAction->__invoke($reserve, [
            'status_id' => ReserveStatus::CONFIRMED->value
        ]);

        // 検証
        $updatedReserve = $reserve->fresh();
        $this->assertEquals($originalData['golf_course_id'], $updatedReserve->golf_course_id);
        $this->assertEquals($originalData['start_date'], $updatedReserve->start_date->format('Y-m-d'));
        $this->assertEquals($originalData['name'], $updatedReserve->name);
        $this->assertEquals($originalData['email'], $updatedReserve->email);
        $this->assertEquals($originalData['person_count'], $updatedReserve->person_count);
        $this->assertEquals(ReserveStatus::CONFIRMED->value, $updatedReserve->status_id);
    }
}