<?php

namespace App\Services\RakutenGora\Exceptions;

class RequiredParameterMissingException extends \Exception
{
    public function __construct()
    {
        parent::__construct('必須パラメータが指定されていません', 400);
    }
}