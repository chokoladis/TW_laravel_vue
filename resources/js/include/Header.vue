<script lang="ts" setup>
    import {page} from "@inertiajs/core/types/page";

    defineProps({
        message: String,
    });
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-primary-subtle">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Главная</a>
                            </li>
                            <li class="nav-item" v-if="(!$page.props.auth)">
                                <a class="nav-link" href="/login">Вход</a>
                            </li>
                            <li class="nav-item" v-if="(!$page.props.auth)">
                                <a class="nav-link" href="/register">Регистрация</a>
                            </li>
                            <li class="nav-item" v-if="($page.props.auth)">
                                <a class="nav-link" href="/logout">Выход</a>
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
