import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Catalog\CategoryController::index
* @see app/Http/Controllers/Catalog/CategoryController.php:21
* @route '/api/categories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Catalog\CategoryController::index
* @see app/Http/Controllers/Catalog/CategoryController.php:21
* @route '/api/categories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Catalog\CategoryController::index
* @see app/Http/Controllers/Catalog/CategoryController.php:21
* @route '/api/categories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Catalog\CategoryController::index
* @see app/Http/Controllers/Catalog/CategoryController.php:21
* @route '/api/categories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const CategoryController = { index }

export default CategoryController