<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirm: '',
})
</script>

<template>
    <main>
        <div class="container">
            <form>
                <h1>login form</h1>
                <div class="mb-3">
                    <label for="name" class="form-label">Введите имя</label>
                    <input type="text" v-model="form.name" id="name" class="form-control">
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" v-model="form.email" id="email" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Пароль</label>
                    <input type="password" class="form-control" id="password" v-model="form.password">
                </div>
                <div class="mb-3">
                    <label for="password_confirm" class="form-label">Подтвердите пароль</label>
                    <input type="password" class="form-control" id="password_confirm" v-model="form.password_confirm">
                </div>
                <button class="btn btn-primary" @click="form.post('/register')">Отправить</button>
            </form>
        </div>
    </main>

</template>

<style scoped>

</style>
