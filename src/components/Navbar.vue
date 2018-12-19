<template>
    <div class="navbar">
        <a
            class="navbar_item"
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
        height: 50px;
        background-color: #2b2b2b;
        color: white;
    }

    .navbar_item:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }

    .navbar_item {
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
