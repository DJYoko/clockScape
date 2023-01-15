<template>
  <div id="view" :style="viewStyle" @click="onClick">
    <div class="l-contentWrapper" :class="contentWrapperClass">
      <p class="c-infoLink">
        <span class="glyphicon glyphicon-info-sign" data-toggle="modal" data-target="#infoModal"></span>
      </p>
      <div class="c-blackBox" @click.stop.prevent>
        <region-selector :region="region" @evtChange="onRegionChange" @click.stop.prevent></region-selector>
      </div>
      <div class="c-blackBox">
        <clocks :unixtime="currentUnixTime" :region="region" class="text-center"></clocks>
      </div>
      <div class="c-blackBox">
        <region-pointer :region="region"></region-pointer>
      </div>
      <photo-info :link="photoLink"></photo-info>
    </div>
  </div>
</template>

<script>
import CONSTANTS from '@js/utils/constants';
import functions from '@js/utils/functions';
import clocks from '@js/components/clocks/';
import photoInfo from '@js/components/photoInfo/';
import regionPointer from '@js/components/regionPointer/';
import regionSelector from '@js/components/regionSelector/';
import { mapState } from 'vuex';

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
      hideOnMobile: false,
    };
  },
  computed: {
    ...mapState('main', ['region', 'currentUnixTime', 'initDeviceUnixTime', 'initServerUnixTime']),
    contentWrapperClass() {
      return {
        hideOnMobile: this.hideOnMobile,
      };
    },
    photoLink() {
      const region = this.region || CONSTANTS.DEFAULT_REGION;
      const localTime = functions.getLocalTime(region, this.currentUnixTime);
      const dayOrNight = functions.getDayOrNight(localTime);
      return CONSTANTS.REGIONS[region].photoLink[dayOrNight];
    },
    viewStyle() {
      const region = this.region || CONSTANTS.DEFAULT_REGION;
      const localTime = functions.getLocalTime(region, this.currentUnixTime);
      const dayOrNight = functions.getDayOrNight(localTime);
      const style = {
        backgroundImage: `url(./img/background/${dayOrNight}/${region}.jpg)`,
      };
      return style;
    },
    timeLagBetweenLocalAndServer() {
      return this.initDeviceUnixTime + this.initServerUnixTime;
    },
  },
  created() {
    setInterval(() => {
      const _nd = new Date();
      const payload = {
        currentUnixTime: _nd.getTime(),
      };
      this.$store.dispatch('main/updateTime', payload);
    }, 1000);
  },
  watch: {
    $route: {
      handler: function (route) {
        const currentRegion = route.query.region;
        const payload = {
          region: this.region, // stored data
        };
        if (typeof currentRegion === 'string' && typeof CONSTANTS.REGIONS[currentRegion] === 'object') {
          payload.region = currentRegion;
        }
        this.$store.dispatch('main/selectRegion', payload);
      },
      immediate: true,
    },
  },
  methods: {
    onClick() {
      this.hideOnMobile = !this.hideOnMobile;
    },
    getBackgroundImagePath(region) {
      const localTime = functions.getLocalTime(region, this.currentUnixTime);
      const dayOrNight = localTime.getHours() < 6 || 18 < localTime.getHours() ? 'night' : 'day';
      return `./img/background/${dayOrNight}/${region}.jpg`;
    },
    onRegionChange({ region }) {
      this.$router.push({
        path: this.$route.path,
        query: {
          region,
        },
      });
    },
  },
};
</script>
