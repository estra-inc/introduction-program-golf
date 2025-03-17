<?php

declare(strict_types=1);

namespace App\UseCases\Reserve;

use App\Models\Reserve;
use Illuminate\Database\Eloquent\Collection;

class IndexAction
{
    public function __invoke(
        int|string $page = 1,
        int|string $limit = 10,
    ): Collection
    {
        $query = Reserve::query();

        if($page) {
            $query->paginate($page);
        }

        if($limit) {
            $query->limit($limit);
        }

        return $query->get();
    }
}
