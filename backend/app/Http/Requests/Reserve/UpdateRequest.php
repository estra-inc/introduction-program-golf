<?php

declare(strict_types=1);

namespace App\Http\Requests\Reserve;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'status_id' => 'required|integer|min:1',
        ];
    }
}
