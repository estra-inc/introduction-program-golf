<?php

declare(strict_types=1);

namespace App\Enums;

use Illuminate\Support\Collection;

enum ReserveStatus: int
{
    case REQUESTED = 1;
    case CONFIRMED = 2;
    case CANCELLED = 3;

    public static function getLabel(int $value): string
    {
        return match ($value) {
            1 => 'リクエスト中',
            2 => '承諾済み',
            3 => 'キャンセル',
            default => throw new \InvalidArgumentException("Invalid value: {$value}")
        };
    }

    public static function getAll(): Collection
    {
        return collect(self::cases())
            ->map(fn ($status) => [
                'value' => $status->value,
                'label' => self::getLabel($status->value),
            ]);
    }

    public static function validate(int $value): bool
    {
        if (in_array($value, array_column(self::cases(), 'value'))) {
            return true;
        }

        throw new \Exception("Invalid status {$value}");
    }
}