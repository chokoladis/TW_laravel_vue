<script setup lang="ts">
    import Header from '../Components/Header.vue';
    import { Form } from '@inertiajs/vue3';
    import {ref} from "vue";

    const formState = {
        email: '',
        password: '',
    }

    const onSuccess = (page: any) => {
        localStorage.setItem('token', page.props.auth.token);
    }

</script>

<template>
    <Header/>
    <main>
        <div class="container">
            <h1>Форма входа</h1>
            <Form
                action="/api/login"
                method="post"
                :data="formState"
                v-slot="form"
                @success="onSuccess"
            >
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" name="email" id="email" class="form-control"
                           :class="{ 'is-invalid' : form.errors.email }" required>
                    <div class="invalid-email badge text-bg-danger" v-if="form.errors.email">
                        {{ form.errors.email }}
                    </div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Пароль</label>
                    <input type="password" name="password" class="form-control" id="password">
                </div>
                <button class="btn btn-primary">
                    {{ 'Войти' }}
                </button>
            </Form>
        </div>
    </main>
</template>

<style scoped>

</style>
