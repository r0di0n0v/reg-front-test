<template>
    <div
        :class="{
            tile: true,
            'tile_text-white': true,
            tile_normal: (type === 'normal'),
            tile_double: (type === 'double'),
            ['tile_image' + id%5]: true,
        }"
        :data-id="id"
    >
        <div class="tile__field">
            <h2 class="tile__title">{{ title }}</h2>
            <p class="tile__description">{{ description }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tile',
        props: ['id', 'type', 'title', 'description'],
    }
</script>

<style scoped>
    .tile {
        height: 300px;
        background-repeat: no-repeat;
        background-size: cover;
        box-sizing: border-box;
        float: left;
    }

    .tile_text-white {
        color: white;
    }

    .tile__field {
        background-color: rgba(0, 0, 0, .35);
        padding: 15px;
    }

    .tile_image1 {
        background-image: url("/images/bg1.jpg");
        background-position: top;
    }
    .tile_image2 {
        background-image: url("/images/bg2.jpg");
        background-position: 0px 40%;
    }
    .tile_image3 {
        background-image: url("/images/bg3.jpg");
        background-position: center;
    }
    .tile_image4 {
        background-image: url("/images/bg4.jpg");
        background-position: 0px 70%;
    }
    .tile_image0{
        background-image: url("/images/bg5.jpg");
        background-position: center;
    }

    @media screen and (min-width: 1024px) {
        .tile_normal {
            width: 33.3%;
        }

        .tile_double {
            width: 66.6%;
        }
    }

    @media screen and (max-width: 1024px) {
        .tile_normal {
            width: 50%;
        }

        .tile_double {
            width: 100%;
        }
    }

    @media screen and (max-width: 480px) {
        .tile_normal {
            width: 100%;
        }

        .tile_double {
            width: 100%;
        }
    }
</style>
