<?php

declare(strict_types=1);

namespace App\Http\Requests\Reserve;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'golf_course_id' => 'required|integer|min:1',
            'start_date' => 'required|date|after:today',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'person_count' => 'required|integer|min:1',
        ];
    }
}
