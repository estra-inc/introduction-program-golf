<?php

namespace App\UseCases\Auth\Exceptions;

class AlreadyLoggedOutException extends \Exception
{
    public function __construct()
    {
        parent::__construct('すでにログアウトしています', 401);
    }
}