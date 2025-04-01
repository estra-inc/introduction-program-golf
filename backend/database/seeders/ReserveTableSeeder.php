<?php

namespace Database\Seeders;

use App\Models\Reserve;
use Illuminate\Database\Seeder;

class ReserveTableSeeder extends Seeder
{
    public function run()
    {
        Reserve::factory()->count(100)->create();
    }
}
