<?php

namespace App\Models;

class Reserve
{
    protected $fillable = [
        'golf_course_id',
        'start_at',
        'name',
        'email',
        'person_count',
    ];

    protected $casts = [
        'start_at' => 'datetime',
    ];
}
