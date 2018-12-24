<template>
    <div class="container">
        <preloader></preloader>
        <error v-if="error" :text="error"></error>
        <tile
            v-else
            v-for="item in tiles"
            :key="item.id"
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
    import ErrorMixin from '../components/ErrorMixin.vue';
    import Preloader from '../components/Preloader.vue';

    export default {
        name: 'HomePage',
        mixins: [ ErrorMixin ],
        components: {
            Tile,
            Preloader,
        },
        data() {
            return {
            };
        },
        computed: {
            tiles() {
                return this.$store.state.tiles;
            },
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
