<script setup>
    import Header from '../../Components/Header.vue';
    import ProductList from "../../Components/ProductList.vue";

    defineProps({
        products: Object
    })
</script>

<template>
    <Header/>
    <ProductList :products/>
</template>
<style scoped></style>
