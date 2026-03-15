<script setup>
    import { Link } from "@inertiajs/vue3";
    import Template from '../../Layouts/Template.vue';
    import ProductList from "../../Components/ProductList.vue";


    defineProps({
        products: Object
    })
</script>
<template>
    <Template>
        <div class="test"></div>
        <Link class="btn btn-primary mb-4" href="/admin/products/add">Добавить товар</Link>
        <ProductList :products/>
    </Template>
</template>
<style scoped></style>
