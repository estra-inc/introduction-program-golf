<?php

declare(strict_types=1);

namespace App\Guards;

use Illuminate\Auth\SessionGuard;
use Illuminate\Contracts\Cookie\QueueingFactory;

/**
 * Authファサードにカスタムメソッドを追加するためのクラス
 */
class CustomSessionGuard extends SessionGuard
{
    public function __construct($name, $provider, $session, $request = null)
    {
        parent::__construct($name, $provider, $session, $request);

        $this->setCookieJar(app(QueueingFactory::class));
    }
}
