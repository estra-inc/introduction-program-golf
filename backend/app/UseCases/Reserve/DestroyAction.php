<?php

declare(strict_types=1);

namespace App\UseCases\Reserve;

use App\Models\Reserve;

class DestroyAction
{
    public function __invoke(Reserve $reserve): void
    {
        $reserve->delete();
    }
}
