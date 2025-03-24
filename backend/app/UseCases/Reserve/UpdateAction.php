<?php

declare(strict_types=1);

namespace App\UseCases\Reserve;

use App\Models\Reserve;

class UpdateAction
{
    public function __invoke(Reserve $reserve, array $data): void
    {
        $reserve->update([
            'status_id' => $data['status_id'],
        ]);
    }
}
