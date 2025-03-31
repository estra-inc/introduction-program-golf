<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Reserve;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reserve>
 */
class ReserveFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Reserve::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'start_date' => fake()->dateTimeBetween('now', '+30 days'),
            'guest_name' => fake()->name(),
            'guest_email' => fake()->safeEmail(),
            'person_count' => fake()->numberBetween(1, 4),
            'status_id' => fake()->numberBetween(1, 3),
            'golf_course_name' => fake()->name(),
            'golf_course_image_url1' => fake()->imageUrl(),
            'golf_course_image_url2' => fake()->imageUrl(),
            'golf_course_image_url3' => fake()->imageUrl(),
            'golf_course_image_url4' => fake()->imageUrl(),
            'golf_course_image_url5' => fake()->imageUrl(),
            'created_at' => fake()->dateTimeBetween('-1 month', 'now'),
            'updated_at' => function (array $attributes) {
                return $attributes['created_at'];
            },
        ];
    }

    /**
     * 今日の予約を生成する状態
     */
    public function today(): static
    {
        return $this->state(fn (array $attributes) => [
            'start_date' => now()->startOfDay(),
        ]);
    }

    /**
     * 明日の予約を生成する状態
     */
    public function tomorrow(): static
    {
        return $this->state(fn (array $attributes) => [
            'start_date' => now()->addDay()->startOfDay(),
        ]);
    }

    /**
     * 過去の予約を生成する状態
     */
    public function past(): static
    {
        return $this->state(fn (array $attributes) => [
            'start_date' => fake()->dateTimeBetween('-30 days', '-1 day'),
        ]);
    }
}