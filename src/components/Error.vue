<template>
    <div class="error">
        <h1>Oooops! Something went wrong.</h1>
        <h3>{{ text }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'Error',
        props: ['text']
    }
</script>

<style scoped>
    .error {
        color: #721c24;
        background-color: #f8d7da;
        padding: 15px 25px;
    }
</style>
