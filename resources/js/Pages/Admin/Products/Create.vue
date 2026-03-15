<script setup>
    import {Form} from "@inertiajs/vue3";
    import Template from '../../Layouts/Template.vue';

    defineProps({
        products: Object,
        categories: Array
    })

    const formData = {
        name: '',
        category_id: null,

    }

</script>

<template>
    <Template>
        <Form
            action="/api/products"
            :data="formData"
            method="post"
            v-slot="form"
        >
            <div class="mb-3">
                <label for="name" class="form-label">Название</label>
                <input type="text" name="name" id="name" class="form-control"
                    :class="{ 'is-invalid' : form.errors.name }" required>
                <div class="invalid-name badge text-bg-danger" v-if="form.errors.name">
                    {{ form.errors.name }}
                </div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Категория</label>
                <select name="category_id" id="" class="form-select"
                    :class="{ 'is-invalid' : form.errors.category_id }" required>
                    <option :value="category.id" v-for="category in categories.data">
                        {{ category.name }}
                    </option>
                </select>
                <div class="invalid-category_id badge text-bg-danger" v-if="form.errors.category_id">
                    {{ form.errors.category_id }}
                </div>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Описание</label>
                <textarea name="description" cols="30" rows="2" class="form-control"
                      :class="{ 'is-invalid' : form.errors.description }" required></textarea>
                <div class="invalid-description badge text-bg-danger" v-if="form.errors.description">
                    {{ form.errors.description }}
                </div>
            </div>

            <div class="mb-3">
                <label for="price" class="form-label">Цена</label>
                <input type="number" class="form-control" name="price"
                       :class="{ 'is-invalid' : form.errors.price }" required>
                <div class="invalid-price badge text-bg-danger" v-if="form.errors.price">
                    {{ form.errors.price }}
                </div>
            </div>
            <button class="btn btn-primary" @click="form.put('/api/products')">Отправить</button>
        </Form>
    </Template>
</template>

<style scoped></style>
