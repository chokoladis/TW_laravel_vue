<script setup>

    import {Link} from "@inertiajs/vue3";

    defineProps({
        products: Object
    })

</script>
<template>
    <div class="comp-product-list">
        <div class="row flex-wrap" v-if="products.data">
            <div class="col-sm-6" v-for="product in products.data">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">{{ product.description }}</p>
                        <Link :href="`/products/${product.id}`"
                              class="card-link btn btn-primary">Ссылка карточки</Link>
                        <Link :href="`/admin/products/${product.id}/edit`" v-if="$page.props.auth"
                              class="card-link btn btn-outline-info">Редактировать</Link>
                        <Link :href="`/admin/products/${product.id}`" method="delete" v-if="$page.props.auth"
                              class="card-link btn btn-outline-danger">Удалить</Link>
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="Пример навигации по страницам" v-if="products.meta">
            <ul class="pagination">
                <li :class="{ 'active': link.active }"
                    class="page-item" v-for="link in products.meta.links">
                    <Link class="page-link" :href="link.url" v-if="link.url">
                        <span aria-hidden="true" v-html="link.label"></span>
                    </Link>
                </li>
            </ul>
            <!-- todo perPage -->
        </nav>
    </div>
</template>
<style scoped>
    .comp-product-list nav {
        margin: 0px auto;
        margin-top: 20px;
        width: fit-content;
    }
</style>
