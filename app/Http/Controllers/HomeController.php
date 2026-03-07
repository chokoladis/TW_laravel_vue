<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\IndexRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(IndexRequest $request)
    {
        return Inertia::render('Home', [
            'products' => (new \App\Services\Catalog\ProductService())->get($request->validated())
        ]);
    }
}
