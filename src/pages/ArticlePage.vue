<template>
    <div class="container">
        <h1>{{ tile.title }}</h1>
        <h2>{{ tile.description }}</h2>
        <p>{{ tile.text }}</p>
        <router-link to="/">Go back</router-link>
    </div>
</template>

<script>
    export default {
        name: 'ArticlePage',
        computed: {
            tile() {
                const tile = this.$store.getters.getTileById(this.$route.params.id);
                if (!tile) {
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
        padding: 15px;
    }
</style>
