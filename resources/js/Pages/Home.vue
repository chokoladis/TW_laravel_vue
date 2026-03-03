<script setup>
    import Header from '../include/Header.vue';

    defineProps({
        // result: Boolean,
        // message: String,
        posts: Object
    })

</script>

<template>
    <Header></Header>
    <main>
        <div class="container">
            <div class="row flex-wrap">
                <div class="col-sm-6" v-for="post in posts.data">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ post.name }}</h5>
                            <p class="card-text">{{ post.description }}</p>
                            <a href="#" class="card-link btn btn-primary">Ссылка карточки</a>
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="Пример навигации по страницам">
                <ul class="pagination">
                    <li :class="{ 'active': link.active }"
                        class="page-item" v-for="link in posts.meta.links">
                        <a class="page-link" :href="link.url" v-if="link.url">
                            <span aria-hidden="true" v-html="link.label"></span>
                        </a>
                    </li>
                </ul>
                <!-- todo perPage -->
            </nav>
        </div>
    </main>
</template>

<style scoped>
    main {
        margin-top: 40px;
    }
    main nav {
        margin: 0px auto;
        margin-top: 20px;
        width: fit-content;
    }
</style>
