<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\IndexRequest;
use App\Models\Product;
use App\Services\Catalog\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private ProductService $productService;

    function __construct()
    {
        $this->productService = new ProductService();
    }

    /**
     * Display a listing of the resource.
     */
    public function index(IndexRequest $request)
    {
        return $this->productService->get($request->validated());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(int $product)
    {
        return $this->productService->getOne($product);
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
