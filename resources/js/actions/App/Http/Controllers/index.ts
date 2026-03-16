import HomeController from './HomeController'
import Catalog from './Catalog'
import AuthController from './AuthController'
import API from './API'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    Catalog: Object.assign(Catalog, Catalog),
    AuthController: Object.assign(AuthController, AuthController),
    API: Object.assign(API, API),
}

export default Controllers