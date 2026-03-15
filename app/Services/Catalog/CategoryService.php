<?php

namespace App\Services\Catalog;

use App\Http\Resources\Catalog\CategoryResouce;
use App\Models\Category;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Cache;

class CategoryService
{
    public function getAllCategories() : ?AnonymousResourceCollection
    {
        return Cache::remember('allCategories', 86400, function () {
            $data = Category::all(['id', 'name']);
            if ($data->isEmpty()) {
                abort();
                return;
            }
            return CategoryResouce::collection($data);
        });
    }
}
