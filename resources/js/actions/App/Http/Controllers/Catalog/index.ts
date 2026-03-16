import ProductController from './ProductController'
import CategoryController from './CategoryController'

const Catalog = {
    ProductController: Object.assign(ProductController, ProductController),
    CategoryController: Object.assign(CategoryController, CategoryController),
}

export default Catalog