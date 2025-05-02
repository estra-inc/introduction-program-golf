<?php

namespace App\UseCases\Auth\Exceptions;

class UnauthorizedMeException extends \Exception
{
    public function __construct()
    {
        parent::__construct('ログインしていません', 401);
    }
}