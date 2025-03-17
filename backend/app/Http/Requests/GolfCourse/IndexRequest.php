<?php

declare(strict_types=1);

namespace App\Http\Requests\GolfCourse;

use Illuminate\Foundation\Http\FormRequest;

class IndexRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'page' => 'required|integer|min:1',
            'keyword' => 'nullable|string|max:255',
            'areaCode' => 'nullable|integer|min:0',
            'latitude' => 'nullable|numeric|min:-90|max:90',
            'longitude' => 'nullable|numeric|min:-180|max:180',
        ];
    }
}
