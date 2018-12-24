<script>
    import Error from './Error.vue';

    export default {
        components: {
            Error,
        },
        computed: {
            error() {
                return this.$store.state.error;
            }
        },
    }
</script>
