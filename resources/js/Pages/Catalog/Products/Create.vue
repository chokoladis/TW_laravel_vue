<script setup lang="ts">
    import { Form } from "@inertiajs/vue3";

    const formData = {
        name: '',
        category_id: null,

    }

    defineProps({
        categories: Array
    })
</script>

<template>
    <main>
        <div class="container">
            <Form
                action="/api/products"
                :data="formData"
                method="post"
                v-slot="form"
            >
                <div class="mb-3">
                    <label for="name" class="form-label">Название</label>
                    <input type="text" name="name" id="name" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Категория</label>
                    <select name="category_id" id="" v-for="category in categories">
                        {{ category }}
                        <option value=""></option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Описание</label>
                    <textarea name="description" cols="30" rows="10"></textarea>
                </div>

                <div class="mb-3">
                    <label for="price" class="form-label">Цена</label>
                    <input type="number" class="form-control" name="price">
                </div>
                <button class="btn btn-primary" @click="form.post('/register')">Отправить</button>
            </Form>
        </div>
    </main>

</template>

<style scoped>

</style>
