import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Catalog\ProductController::index
* @see app/Http/Controllers/Catalog/ProductController.php:39
* @route '/admin/products'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Catalog\ProductController::index
* @see app/Http/Controllers/Catalog/ProductController.php:39
* @route '/admin/products'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Catalog\ProductController::index
* @see app/Http/Controllers/Catalog/ProductController.php:39
* @route '/admin/products'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::index
* @see app/Http/Controllers/Catalog/ProductController.php:39
* @route '/admin/products'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::create
* @see app/Http/Controllers/Catalog/ProductController.php:49
* @route '/admin/products/add'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/products/add',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Catalog\ProductController::create
* @see app/Http/Controllers/Catalog/ProductController.php:49
* @route '/admin/products/add'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Catalog\ProductController::create
* @see app/Http/Controllers/Catalog/ProductController.php:49
* @route '/admin/products/add'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::create
* @see app/Http/Controllers/Catalog/ProductController.php:49
* @route '/admin/products/add'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/admin/products/{product}'
*/
export const show = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/products/{product}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/admin/products/{product}'
*/
show.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return show.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/admin/products/{product}'
*/
show.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/admin/products/{product}'
*/
show.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::edit
* @see app/Http/Controllers/Catalog/ProductController.php:73
* @route '/admin/products/{product}/edit'
*/
export const edit = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/products/{product}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Catalog\ProductController::edit
* @see app/Http/Controllers/Catalog/ProductController.php:73
* @route '/admin/products/{product}/edit'
*/
edit.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return edit.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Catalog\ProductController::edit
* @see app/Http/Controllers/Catalog/ProductController.php:73
* @route '/admin/products/{product}/edit'
*/
edit.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::edit
* @see app/Http/Controllers/Catalog/ProductController.php:73
* @route '/admin/products/{product}/edit'
*/
edit.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::update
* @see app/Http/Controllers/Catalog/ProductController.php:81
* @route '/admin/products/{product}'
*/
export const update = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/products/{product}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Catalog\ProductController::update
* @see app/Http/Controllers/Catalog/ProductController.php:81
* @route '/admin/products/{product}'
*/
update.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return update.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Catalog\ProductController::update
* @see app/Http/Controllers/Catalog/ProductController.php:81
* @route '/admin/products/{product}'
*/
update.put = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::update
* @see app/Http/Controllers/Catalog/ProductController.php:0
* @route '/admin/products/{product}'
*/
export const update = (args: { product: string | number } | [product: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: update.url(args, options),
    method: 'delete',
})

update.definition = {
    methods: ["delete"],
    url: '/admin/products/{product}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Catalog\ProductController::update
* @see app/Http/Controllers/Catalog/ProductController.php:0
* @route '/admin/products/{product}'
*/
update.url = (args: { product: string | number } | [product: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: args.product,
    }

    return update.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Catalog\ProductController::update
* @see app/Http/Controllers/Catalog/ProductController.php:0
* @route '/admin/products/{product}'
*/
update.delete = (args: { product: string | number } | [product: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: update.url(args, options),
    method: 'delete',
})

const products = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
}

export default products