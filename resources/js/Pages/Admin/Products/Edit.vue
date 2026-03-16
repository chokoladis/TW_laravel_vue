<script setup>
    import {Form} from "@inertiajs/vue3";
    import Template from '../../Layouts/Template.vue';
    import { update } from "@/actions/App/Http/Controllers/Catalog/ProductController";

    const props = defineProps({
        product: Object,
        categories: Array
    })

    const formData = {
        name: props.product.data.name,
        category_id: props.product.data.category_id,
        description: props.product.data.description,
        price: props.product.data.price,
    }
</script>

<template>
    <Template>
        <Form
            :action="update({ product: props.product.data.id})"
            :data="formData"
            method="put"
            v-slot="form"
        >
            <div class="mb-3">
                <label for="name" class="form-label">Название</label>
                <input type="text" name="name" id="name" class="form-control"
                    :class="{ 'is-invalid' : form.errors.name }" required
                    v-model="props.product.data.name">
                <div class="invalid-name badge text-bg-danger" v-if="form.errors.name">
                    {{ form.errors.name }}
                </div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Категория</label>
                <select name="category_id" id="" class="form-select"
                    :class="{ 'is-invalid' : form.errors.category_id }"
                    v-model="formData.category_id">
                    <option v-for="category in categories.data"
                        :key="category.id"
                        :value="category.id">
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
                      :class="{ 'is-invalid' : form.errors.description }"
                      v-model="props.product.data.description"
                ></textarea>
                <div class="invalid-description badge text-bg-danger" v-if="form.errors.description">
                    {{ form.errors.description }}
                </div>
            </div>

            <div class="mb-3">
                <label for="price" class="form-label">Цена</label>
                <input type="number" class="form-control" name="price" step="0.01"
                       :class="{ 'is-invalid' : form.errors.price }" required
                    v-model="props.product.data.price">
                <div class="invalid-price badge text-bg-danger" v-if="form.errors.price">
                    {{ form.errors.price }}
                </div>
            </div>
            <button class="btn btn-primary">Отправить</button>
        </Form>
    </Template>
</template>

<style scoped></style>
