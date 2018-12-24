<template>
    <div class="app-layout">
        <navbar :links="links" class="navbar-container"></navbar>
        <div class="page-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import Navbar from './components/Navbar.vue';

    export default {
        name: 'App',
        data() {
            return {
                links: [
                    { path: '/', title: 'Home' },
                    { path: '/about', title: 'About' },
                ],
            };
        },
        components: {
            Navbar,
        },
        methods: {
            ...mapMutations([
                'loadTilesToStore',
                'setLoadingState',
                'setError',
            ]),
            loadTiles() {
                this.setError('');
                this.setLoadingState(true);
                fetch('/api/tiles')
                    .then(res => res.json())
                    .then((res) => {
                        if (typeof res === 'object') {
                            if (res.success === true) {
                                this.loadTilesToStore(res.tiles);
                            } else {
                                throw Error('Request not succeed');
                            }
                        } else {
                            throw Error('Wrong request format');
                        }
                    })
                    .catch((e) => {
                        console.error(e);
                        this.setError(e.toString());
                        this.setLoadingState(false);
                    });
            }
        },
        created() {
            this.loadTiles();
        }
    };
</script>

<style>
    html, body, .app-layout {
        height: 100%;
        margin: 0;
    }

    .app-layout {
        height: 100%;
    }
    .page-container {
        height: calc(100% - 50px);
    }
    .navbar-container {
        height: 50px !important;
    }
</style>
