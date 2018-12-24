<template>
    <div class="preloader" v-if="loading">Loading</div>
</template>

<script>
    export default {
        name: 'Preloader',
        computed: {
            loading() {
                return this.$store.state.loading;
            }
        },
    }
</script>

<style scoped>
    .preloader {
        text-align: center;
    }
</style>
