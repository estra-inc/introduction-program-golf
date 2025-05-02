<?php

declare(strict_types=1);

namespace App\UseCases\Reserve;

use App\Enums\ReserveStatus;
use App\Models\Reserve;

class UpdateAction
{
    public function __invoke(Reserve $reserve, array $data): void
    {
        if (isset($data['status_id'])) {
            ReserveStatus::validate($data['status_id']);
        }

        $reserve->update($data);
    }
}
