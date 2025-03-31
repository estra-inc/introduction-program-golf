<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserve extends Model
{
    use HasUlids, HasFactory;

    protected $fillable = [
        'golf_course_id',
        'start_date',
        'guest_name',
        'guest_email',
        'person_count',
        'status_id',
        'golf_course_name',
        'golf_course_image_url1',
        'golf_course_image_url2',
        'golf_course_image_url3',
        'golf_course_image_url4',
        'golf_course_image_url5',
    ];

    protected $casts = [
        'start_date' => 'datetime',
    ];
}
