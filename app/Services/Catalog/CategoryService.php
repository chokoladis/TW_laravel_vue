<?php

namespace App\Services\Catalog;

use App\Http\Resources\Catalog\CategoryResouce;
use App\Models\Category;
use Illuminate\Support\Facades\Cache;

class CategoryService
{
    public function getAllCategories()
    {
        return Cache::remember('allCategories', 86400, function () {
            return CategoryResouce::collection(Category::get());
        });
    }
}
