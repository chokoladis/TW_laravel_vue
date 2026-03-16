import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::authByLogin
* @see app/Http/Controllers/AuthController.php:31
* @route '/login'
*/
const authByLoginb6041c76e8e1cd791f8f89d035d48611 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authByLoginb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'post',
})

authByLoginb6041c76e8e1cd791f8f89d035d48611.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::authByLogin
* @see app/Http/Controllers/AuthController.php:31
* @route '/login'
*/
authByLoginb6041c76e8e1cd791f8f89d035d48611.url = (options?: RouteQueryOptions) => {
    return authByLoginb6041c76e8e1cd791f8f89d035d48611.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::authByLogin
* @see app/Http/Controllers/AuthController.php:31
* @route '/login'
*/
authByLoginb6041c76e8e1cd791f8f89d035d48611.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authByLoginb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::authByLogin
* @see app/Http/Controllers/AuthController.php:31
* @route '/api/login'
*/
const authByLogin864070da724d26d80017528ac19e2893 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authByLogin864070da724d26d80017528ac19e2893.url(options),
    method: 'post',
})

authByLogin864070da724d26d80017528ac19e2893.definition = {
    methods: ["post"],
    url: '/api/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::authByLogin
* @see app/Http/Controllers/AuthController.php:31
* @route '/api/login'
*/
authByLogin864070da724d26d80017528ac19e2893.url = (options?: RouteQueryOptions) => {
    return authByLogin864070da724d26d80017528ac19e2893.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::authByLogin
* @see app/Http/Controllers/AuthController.php:31
* @route '/api/login'
*/
authByLogin864070da724d26d80017528ac19e2893.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authByLogin864070da724d26d80017528ac19e2893.url(options),
    method: 'post',
})

export const authByLogin = {
    '/login': authByLoginb6041c76e8e1cd791f8f89d035d48611,
    '/api/login': authByLogin864070da724d26d80017528ac19e2893,
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:24
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:24
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:24
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

const AuthController = { login, authByLogin, logout }

export default AuthController