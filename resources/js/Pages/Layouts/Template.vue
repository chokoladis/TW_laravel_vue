<script setup>
    import Header from '../Components/Header.vue';
</script>
<template>
    <Header/>
    <main>
        <div class="container">
            <slot/>
        </div>
    </main>
</template>
<style scoped>
    main {
        margin-top: 40px;
    }
</style>
