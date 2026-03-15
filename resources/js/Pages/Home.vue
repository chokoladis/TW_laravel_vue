<script setup>
    import ProductList from "./Components/ProductList.vue";
    import Template from "./Layouts/Template.vue";

    defineProps({
        products: Object
    })

</script>

<template>
    <Template>
            <ProductList :products></ProductList>
    </Template>
</template>

<style scoped>
    main {
        margin-top: 40px;
    }
</style>
