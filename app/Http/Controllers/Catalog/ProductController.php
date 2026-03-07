<?php

namespace App\Http\Controllers\Catalog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\IndexRequest;
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
        return $this->productService->get($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(int $product)
    {
        return $this->productService->getOne($product);
    }


    // for admin

    public function adminIndex(IndexRequest $request)
    {
        return Inertia::render('Catalog/Products/List', [
            'products' => (new \App\Services\Catalog\ProductService())->get($request->validated())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Catalog/Products/Create', [
            'categories' => $this->categoryService->getAllCategories(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
//        Название (input),
//        Категория (select, загружается из GET /api/categories),
//        Описание (textarea),
//        Цена (input type number).
        dd('store');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
