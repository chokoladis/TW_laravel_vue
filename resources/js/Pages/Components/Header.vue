<script lang="ts" setup>
    import {Form, Link } from "@inertiajs/vue3";

    defineProps({
        message: String,
    });

    const successLogout = () => {
        localStorage.removeItem('token');
    }
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-primary-subtle">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="/">Главная</Link>
                            </li>
                            <li class="nav-item" v-if="(!$page.props.auth)">
                                <Link class="nav-link" href="/login">Вход</Link>
                            </li>
                            <li class="nav-item" v-if="(!$page.props.auth)">
                                <Link class="nav-link" href="/register">Регистрация</Link>
<!--                                mb use route('auth.register-page')-->
                            </li>
                            <li class="nav-item" v-if="($page.props.auth)">
                                <Link class="nav-link" href="/admin/products">Управление товарами</Link>
                            </li>
                            <li class="nav-item" v-if="($page.props.auth)">
                                <Link class="nav-link" href="/logout" method="post" onSuccess="successLogout">Выйти</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <div class="alert alert-info" v-if="message">
        {{ message }}
    </div>
</template>

<style scoped>

</style>
