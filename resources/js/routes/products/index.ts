import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\API\ProductController::store
* @see app/Http/Controllers/API/ProductController.php:0
* @route '/api/products'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/products',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\API\ProductController::store
* @see app/Http/Controllers/API/ProductController.php:0
* @route '/api/products'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\ProductController::store
* @see app/Http/Controllers/API/ProductController.php:0
* @route '/api/products'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\API\ProductController::update
* @see app/Http/Controllers/API/ProductController.php:53
* @route '/api/products/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/api/products/{id}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\API\ProductController::update
* @see app/Http/Controllers/API/ProductController.php:53
* @route '/api/products/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\ProductController::update
* @see app/Http/Controllers/API/ProductController.php:53
* @route '/api/products/{id}'
*/
update.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

const products = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
}

export default products