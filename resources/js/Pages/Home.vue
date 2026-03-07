<script setup>
    import Header from './components/Header.vue';
    import ProductList from "./components/ProductList.vue";

    defineProps({
        products: Object
    })

</script>

<template>
    <Header></Header>
    <ProductList :products></ProductList>
</template>

<style scoped>
    main {
        margin-top: 40px;
    }
    main nav {
        margin: 0px auto;
        margin-top: 20px;
        width: fit-content;
    }
</style>
