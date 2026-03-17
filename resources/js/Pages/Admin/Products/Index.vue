<script setup>
import {Form, Link} from "@inertiajs/vue3";
    import Template from '../../Layouts/Template.vue';
    import ProductList from "../../Components/ProductList.vue";
    import { adminIndex } from "@/actions/App/Http/Controllers/Catalog/ProductController";

    defineProps({
        products: Object,
        categories: Object
    })
</script>
<template>
    <Template>
        <Link class="btn btn-primary mb-4" href="/admin/products/add">Добавить товар</Link>
        <Form class="filters" :action="adminIndex()">
            <div class="filter-categories" v-if="categories.data">
                <select name="category_id">
                    <option :value="category.id" v-for="category in categories.data">{{category.name}}</option>
                </select>
            </div>
            <!--            todo perpage -->
        </Form>
        <ProductList :products/>
    </Template>
</template>
<style scoped></style>
