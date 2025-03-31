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
    ];

    protected $casts = [
        'start_date' => 'datetime',
    ];
}
