<?php

declare(strict_types=1);

namespace App\UseCases\Reserve;

use App\Models\Reserve;
use Illuminate\Pagination\LengthAwarePaginator;

class IndexAction
{
    public function __invoke(
        int $page = 1,
        int $limit = 50,
    ): LengthAwarePaginator {
        return Reserve::query()
            ->orderBy('created_at', 'desc')
            ->paginate(
                perPage: $limit,
                page: $page,
            );
    }
}