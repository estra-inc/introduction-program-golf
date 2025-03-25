<?php

declare(strict_types=1);

namespace Tests\Traits;

use App\Services\RakutenGora\RakutenGoraServiceInterface;
use Tests\Mocks\RakutenGoraServiceMock;

trait UsesRakutenGoraMockTrait
{
    protected function setUpRakutenGoraMock(): void
    {
        $this->app->bind(RakutenGoraServiceInterface::class, RakutenGoraServiceMock::class);
    }
}