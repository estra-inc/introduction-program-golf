<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reserves', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->ulid('golf_course_id');
            $table->date('start_date');
            $table->string('guest_name');
            $table->string('guest_email');
            $table->unsignedInteger('status_id');
            $table->unsignedInteger('person_count');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reserves');
    }
};
