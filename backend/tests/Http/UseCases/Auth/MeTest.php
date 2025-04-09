<?php

declare(strict_types=1);

namespace Tests\Http\UseCases\Auth;

use App\Models\Admin;
use App\UseCases\Auth\MeAction;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\UnauthorizedException;
use Tests\TestCase;

class MeTest extends TestCase
{
    use RefreshDatabase;

    private MeAction $meAction;

    protected function setUp(): void
    {
        parent::setUp();
        $this->meAction = new MeAction;
    }

    /**
     * @test
     */
    public function 認証済みユーザーが取得できること(): void
    {
        $admin = Admin::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);

        Auth::guard('admin')->login($admin);

        // Act
        $result = ($this->meAction)();

        // Assert
        $this->assertEquals($admin->id, $result->id);
        $this->assertEquals($admin->email, $result->email);
    }

    /**
     * @test
     */
    public function 未認証の場合は例外がスローされること(): void
    {
        // Assert
        $this->expectException(UnauthorizedException::class);
        $this->expectExceptionMessage('ログインしていません');

        // Act
        ($this->meAction)();
    }
}
