<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\IndexRequest;
use App\Http\Requests\Product\StoreRequest;
use App\Models\Product;
use App\Services\Catalog\CategoryService;
use App\Services\Catalog\ProductService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    private ProductService $productService;
    private CategoryService $categoryService;

    function __construct()
    {
        $this->productService = new ProductService();
        $this->categoryService = new CategoryService();
    }

    /**
     * Display a listing of the resource.
     */
    public function index(IndexRequest $request)
    {
//        'categories' => $this->categoryService->getAllCategories()
        return $this->productService->get($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(int $product)
    {
        return $this->productService->getOne($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        dd($product, $request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
