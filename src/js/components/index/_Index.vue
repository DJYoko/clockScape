<template>
  <div
    id="view"
    :style="viewStyle"
  >
    <p class="text-right info-link">
      <span
        class="glyphicon glyphicon-info-sign"
        data-toggle="modal"
        data-target="#info_modal"
      ></span>
    </p>
    <div class="blackbox">
      <region-selector
        :region="region"
        @change="onRegionChange"
      ></region-selector>
    </div>
    <div class="blackbox">
      <clocks
        :unixtime="currentUnixtime"
        :region="region"
        class="text-center"
      ></clocks>
    </div>
    <div class="blackbox">
      <region-pointer :region="region"></region-pointer>
    </div>
    <photo-info :link="photoLink"></photo-info>
  </div>
</template>
<script>
import CONSTANTS from "@js/utils/constants";
import functions from "@js/utils/functions";
import clocks from "@js/components/clocks/";
import photoInfo from "@js/components/photoInfo/";
import regionPointer from "@js/components/regionPointer/";
import regionSelector from "@js/components/regionSelector/";
import { mapState } from "vuex";

export default {
  components: {
    clocks,
    photoInfo,
    regionPointer,
    regionSelector
  },
  data() {
    return {
      regions: CONSTANTS.REGIONS
    };
  },
  computed: {
    ...mapState(["region", "currentUnixtime"]),
    photoLink() {
      const region = this.region || CONSTANTS.REGIONS[CONSTANTS.DEFAULT_REGION]
      const localTime = functions.getLocalTime(region, this.currentUnixtime)
      const dayOrNight = functions.getDayOrNight(localTime)
      return CONSTANTS.REGIONS[region].photoLink[dayOrNight]
    },
    viewStyle() {
      const region = this.region || CONSTANTS.REGIONS[CONSTANTS.DEFAULT_REGION]
      const localTime = functions.getLocalTime(region, this.currentUnixtime)
      const dayOrNight = functions.getDayOrNight(localTime)
      const style = {
        backgroundImage: `url(./img/background/${dayOrNight}/${region}.jpg)`
      };
      return style;
    }
  },
  created() {
    const payload = {};
    payload.callback = () => {
      setInterval(() => {
        this.$store.dispatch("updateTime");
      }, 1000);
    };
    this.$store.dispatch("loadServerTime", payload);
  },
  watch: {
    $route: {
      handler: function(route) {
        const currentRegion = route.query.region;
        const payload = {
          region: this.region // stored data
        }
        if(typeof currentRegion === 'string' && typeof CONSTANTS.REGIONS[currentRegion] === 'object') {
          payload.region = currentRegion
        }
        this.$store.dispatch("selectRegion", payload);
      },
      immediate: true
    }
  },
  methods: {
    getBackgroundImagePath(region) {
      const localTime = functions.getLocalTime(region, this.currentUnixtime)
      const dayOrNight = (localTime.getHours() < 6 || 18 < localTime.getHours()) ? 'night' : 'day'
      return `./img/background/${dayOrNight}/${region}.jpg`
    },
    onRegionChange(payload) {
      this.$router.push({
        path: '/',
        query: {
          region: payload.region
        }
      })
    }
  }
};
</script>

<style lang="scss">
#view {
  padding: 20px;
  background-color: #000;
  min-height: 100%;
  overflow: hidden;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.blackbox {
  background-color: rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 768px) {
    width: 280px;
  }
  margin: 0 0 20px auto;
  padding: 20px;
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
