<template>
    <div class="container">
        <div class="error" v-if="error">
            <h1>Oooops! Something went wrong.</h1>
            <h3>{{ error }}</h3>
        </div>
        <tile
            v-for="item in tiles"
            :id="item.id"
            :title="item.title"
            :description="item.description"
            :type="item.type"
            @click.native="$router.push({ path: `/article/${ item.id }` })"
        >
        </tile>
    </div>
</template>

<script>
    import Tile from '../components/Tile.vue';

    export default {
        name: "HomePage",
        components: {
            Tile,
        },
        data() {
            return {
            };
        },
        computed: {
            tiles() {
                return this.$store.state.tiles;
            },
            error() {
                return this.$store.state.error;
            }
        }
    }
</script>

<style scoped>
    .container {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .error {
        color: #721c24;
        background-color: #f8d7da;
        padding: .75rem 1.25rem;
    }
</style>
