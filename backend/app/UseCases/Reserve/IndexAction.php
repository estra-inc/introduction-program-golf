<?php

declare(strict_types=1);

namespace App\UseCases\Reserve;

use App\Models\Reserve;
use Illuminate\Pagination\LengthAwarePaginator;

class IndexAction
{
    public function __invoke(
        int|string $page = 1,
        int|string $limit = 10,
    ): LengthAwarePaginator
    {
        return Reserve::query()
            ->orderBy('created_at', 'desc')
            ->paginate(
                perPage: $limit,
                page: $page,
            );
    }
}
