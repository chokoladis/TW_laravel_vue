<script setup>
    import Template from '../../Layouts/Template.vue';

    defineProps({
        product: Object
    })
</script>

<template>
    <Template>
        {{ product }}
    </Template>
</template>
<style scoped></style>
