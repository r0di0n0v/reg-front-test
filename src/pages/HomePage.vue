<template>
    <div class="container">
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
</style>
