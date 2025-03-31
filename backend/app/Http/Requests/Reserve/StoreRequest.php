<?php

declare(strict_types=1);

namespace App\Http\Requests\Reserve;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'start_date' => 'required|date|after:today|date_format:Y-m-d',
            'guest_name' => 'required|string|max:255',
            'guest_email' => 'required|email|max:255',
            'person_count' => 'required|integer|min:1',
            // ゴルフ場情報
            'golf_course_name' => 'required|string|max:255',
            'golf_course_image_url1' => 'required|string|max:255',
            'golf_course_image_url2' => 'required|string|max:255',
            'golf_course_image_url3' => 'required|string|max:255',
            'golf_course_image_url4' => 'required|string|max:255',
            'golf_course_image_url5' => 'required|string|max:255',
        ];
    }
}
