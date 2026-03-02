<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(rand(1, 3), true),
            'description' => $this->faker->words(rand(4, 10), true),
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'category_id' => Category::query()->inRandomOrder()->first()
        ];
    }
}
