<?php

declare(strict_types=1);

namespace App\Session;

use Illuminate\Session\DatabaseSessionHandler as BaseDatabaseSessionHandler;
use SessionHandlerInterface;

class CustomDatabaseSessionHandler extends BaseDatabaseSessionHandler implements SessionHandlerInterface
{
    public function write($sessionId, $data): bool
    {
        // NOTE: `$payload`はsessionsテーブルに登録するデータの連想配列。
        // 今回はuser_idカラムを使用しないため除外している。
        $payload = [
            'payload' => base64_encode($data),
            'last_activity' => $this->currentTime(),
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
        ];

        if (! $this->exists) {
            $this->read($sessionId);
        }

        if ($this->exists) {
            $this->performUpdate($sessionId, $payload);
        } else {
            $this->performInsert($sessionId, $payload);
        }

        return $this->exists = true;
    }
}
