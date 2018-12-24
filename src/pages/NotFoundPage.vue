<template>
    <div class="container">
        <h1>Oooops!</h1>
        <h3>Not found</h3>
        <router-link to="/">Go Home</router-link>
    </div>
</template>

<script>
    export default {
        name: "NotFoundPage"
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
