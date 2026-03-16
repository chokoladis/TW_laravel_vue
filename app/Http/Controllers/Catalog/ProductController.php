<?php

namespace App\Http\Controllers\Catalog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\IndexRequest;
use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Http\Resources\Catalog\ProductResource;
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
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Catalog/Products/Detail', [
            'product' => ProductResource::make($product),
        ]);
    }


    // for admin

    public function adminIndex(IndexRequest $request)
    {
        return Inertia::render('Admin/Products/Index', [
            'products' => (new \App\Services\Catalog\ProductService())->get($request->validated())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Products/Create', [
            'categories' => $this->categoryService->getAllCategories(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        if (Product::create($request->validated())) {
            return redirect(route('admin.products.index'))->with('message', 'Товар успешно добавлен');
        }

        return back()->withErrors(['Ошибка создания товара']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Admin/Products/Edit', [
            'product' => ProductResource::make($product),
            'categories' => $this->categoryService->getAllCategories(),
        ]);
    }

    public function update(UpdateRequest $request, Product $product)
    {
        if ($product->update($request->validated())) {
            return redirect(route('admin.products.index'))->with('message', 'Товар успешно обновлен');
        }

        return back()->withErrors(['Ошибка обновления товара']);
    }

    public function delete(Product $product)
    {
        if ($product->delete()) {
            return redirect(route('admin.products.index'))->with('message', 'Товар успешно удален');
        }

        return back()->withErrors(['Ошибка удаления товара']);
    }
}
