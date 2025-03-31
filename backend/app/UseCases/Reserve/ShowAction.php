<?php

declare(strict_types=1);

namespace App\UseCases\Reserve;

use App\Models\Reserve;

class ShowAction
{
    public function __invoke(Reserve $reserve): Reserve
    {
        return $reserve;
    }
}
