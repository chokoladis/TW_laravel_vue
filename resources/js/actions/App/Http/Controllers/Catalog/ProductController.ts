import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/products/{id}'
*/
const showf935681a42bef97fb6677587a93629d0 = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf935681a42bef97fb6677587a93629d0.url(args, options),
    method: 'get',
})

showf935681a42bef97fb6677587a93629d0.definition = {
    methods: ["get","head"],
    url: '/products/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/products/{id}'
*/
showf935681a42bef97fb6677587a93629d0.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showf935681a42bef97fb6677587a93629d0.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/products/{id}'
*/
showf935681a42bef97fb6677587a93629d0.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf935681a42bef97fb6677587a93629d0.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/products/{id}'
*/
showf935681a42bef97fb6677587a93629d0.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showf935681a42bef97fb6677587a93629d0.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/admin/products/{product}'
*/
const show87b238a5aa25582a71402331b4a5dcde = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show87b238a5aa25582a71402331b4a5dcde.url(args, options),
    method: 'get',
})

show87b238a5aa25582a71402331b4a5dcde.definition = {
    methods: ["get","head"],
    url: '/admin/products/{product}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/admin/products/{product}'
*/
show87b238a5aa25582a71402331b4a5dcde.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show87b238a5aa25582a71402331b4a5dcde.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/admin/products/{product}'
*/
show87b238a5aa25582a71402331b4a5dcde.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show87b238a5aa25582a71402331b4a5dcde.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::show
* @see app/Http/Controllers/Catalog/ProductController.php:29
* @route '/admin/products/{product}'
*/
show87b238a5aa25582a71402331b4a5dcde.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show87b238a5aa25582a71402331b4a5dcde.url(args, options),
    method: 'head',
})

export const show = {
    '/products/{id}': showf935681a42bef97fb6677587a93629d0,
    '/admin/products/{product}': show87b238a5aa25582a71402331b4a5dcde,
}

/**
* @see \App\Http\Controllers\Catalog\ProductController::adminIndex
* @see app/Http/Controllers/Catalog/ProductController.php:39
* @route '/admin/products'
*/
export const adminIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminIndex.url(options),
    method: 'get',
})

adminIndex.definition = {
    methods: ["get","head"],
    url: '/admin/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Catalog\ProductController::adminIndex
* @see app/Http/Controllers/Catalog/ProductController.php:39
* @route '/admin/products'
*/
adminIndex.url = (options?: RouteQueryOptions) => {
    return adminIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Catalog\ProductController::adminIndex
* @see app/Http/Controllers/Catalog/ProductController.php:39
* @route '/admin/products'
*/
adminIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Catalog\ProductController::adminIndex
* @see app/Http/Controllers/Catalog/ProductController.php:39
* @route '/admin/products'
*/
adminIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: adminIndex.url(options),
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
* @see \App\Http\Controllers\Catalog\ProductController::deleteMethod
* @see app/Http/Controllers/Catalog/ProductController.php:0
* @route '/admin/products/{product}'
*/
export const deleteMethod = (args: { product: string | number } | [product: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/admin/products/{product}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Catalog\ProductController::deleteMethod
* @see app/Http/Controllers/Catalog/ProductController.php:0
* @route '/admin/products/{product}'
*/
deleteMethod.url = (args: { product: string | number } | [product: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return deleteMethod.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Catalog\ProductController::deleteMethod
* @see app/Http/Controllers/Catalog/ProductController.php:0
* @route '/admin/products/{product}'
*/
deleteMethod.delete = (args: { product: string | number } | [product: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

const ProductController = { show, adminIndex, create, edit, update, deleteMethod, delete: deleteMethod }

export default ProductController