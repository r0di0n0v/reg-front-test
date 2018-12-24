<template>
    <div class="container">
        <preloader></preloader>
        <error v-if="error" :text="error"></error>
        <div v-else class="article">
            <h1>{{ tile.title }}</h1>
            <h2>{{ tile.description }}</h2>
            <p>{{ tile.text }}</p>
            <router-link to="/">Go back</router-link>
        </div>
    </div>
</template>

<script>
    import ErrorMixin from '../components/ErrorMixin.vue';
    import Preloader from '../components/Preloader.vue';

    export default {
        name: 'ArticlePage',
        mixins: [ ErrorMixin ],
        components: {
            Preloader,
        },
        computed: {
            tile() {
                const tile = this.$store.getters.getTileById(this.$route.params.id);

                if (!tile.id && !this.error && !this.$store.state.loading) {
                    return this.$router.push('/404');
                }
                return tile;
            }
        },
    }
</script>

<style scoped>
    .container {
        position: relative;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
    }
    .article {
        padding: 15px;
    }
</style>
