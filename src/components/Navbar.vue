<template>
    <div class="navbar">
        <a
            class="navbar__item"
            v-for="link in links"
            @click="$router.push({ path: link.path })"
        >{{ link.title }}</a>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        props: ['links'],
    }
</script>

<style scoped>
    .navbar {
        position: relative;
        height: 100%;
        background-color: #2b2b2b;
        color: white;
    }

    .navbar__item:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }

    .navbar__item {
        height: 100%;
        position: relative;
        box-sizing: border-box;
        padding: 10px;
        display: inline-block;
        vertical-align: middle;
        margin: 0px 15px;

        color: white;
        cursor: pointer;
    }
</style>
