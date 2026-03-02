<?php

namespace App\Services\Catalog;

use App\Http\Resources\Catalog\ProductResource;
use App\Models\Product;

class ProductService
{
    const DEFAULT_PER_PAGE = 10;
    public function get(array $data)
    {
        $perPage = $data['perPage'] ?? self::DEFAULT_PER_PAGE;

        $products = Product::query()->paginate($perPage);

        return $products; //ProductResource::collection($products);
    }

    public function getOne(int $productId)
    {
        $product = Product::query()->findOrFail($productId);

        return new ProductResource($product);
    }
}
