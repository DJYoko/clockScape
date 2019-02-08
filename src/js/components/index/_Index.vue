<template>
    <div id="view" :style="viewStyle">
        <p class="text-right info-link">
            <span class="glyphicon glyphicon-info-sign" data-toggle="modal" data-target="#info_modal"></span>
        </p>
        <div class="blackbox region_selector_wrapper">
            <region-selector :region="region" @change="onRegionChange" style="margin:0 10px 20px 0;"></region-selector>
            <clocks :unixtime="currentUnixtime" :region="region" class="text-center"></clocks>
        </div>
        <div class="blackbox">
            <region-pointer :region="region"></region-pointer>
        </div>
        <photo-info :region="region"></photo-info>
    </div>
</template>
<script>
    import CONSTANTS from '../../utils/constants';
    import clocks from '../clocks/';
    import photoInfo from '../photoInfo/';
    import regionPointer from '../regionPointer/';
    import regionSelector from '../regionSelector/';
    import {
        mapState
    } from 'vuex';

    export default {
        components: {
            clocks,
            photoInfo,
            regionPointer,
            regionSelector,
        },
        data() {
            return {
                regions: CONSTANTS.REGIONS,
            }
        },
        computed: {
            ...mapState([
                'region',
                'currentUnixtime',
            ]),
            viewStyle() {
                const style = {
                    padding: '10px',
                    backgroundImage: 'url(img/region/' + this.region + '.jpg)',
                };
                return style;
            }
        },
        created() {
            const payload = {};
            payload.callback = () => {
                setInterval(() => {
                    this.$store.dispatch('updateTime');
                }, 1000);
            };
            this.$store.dispatch('loadServerTime', payload);
        },
        methods: {
            onRegionChange(payload) {
                this.$store.dispatch('selectRegion', payload);
            },
            syncRegion() {
                if (this.region === this.$route.params.region) {
                    return false;
                }
                const init_region = (this.$route.params.region) ? this.$route.params.region : CONSTANTS.DEFAULT_REGION;

                this.$store.dispatch('selectRegion', {
                    region: init_region
                });
            },
        },
    };

</script>

<style lang="scss">
    #view {
        background-color: #000;
        height: 100%;
        overflow: hidden;
        text-align: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .blackbox {
        @media screen and (min-width: 768px) {
            width: 300px;
        }
        margin: 0 0 20px auto;
        padding: 20px 0;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 4px;
    }

    .region_selector_wrapper {
        text-align: right;
        margin-bottom: 10px;
    }

    .info-link {

        .glyphicon {
            cursor: pointer;
            background: rgba(255, 255, 255, 0.5);
            font-size: 16px;
            padding: 4px 4px 2px;
            border-radius: 16px;
            color: #262626;

            &:hover {
                opacity: 0.75;
            }
        }
    }

</style>
