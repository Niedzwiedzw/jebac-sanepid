<script lang="ts">
    import {Line} from 'vue-chartjs';

    export default {
        extends: Line,
        props: [
            'data',
            'maintainAspectRatio',
        ],
        mounted() {
            this.renderChart(
                this.data,
                {
                    animation: {
                        duration: 500,
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                },
            );
        },
    } as any;
</script>

<style scoped lang="scss">

</style>
