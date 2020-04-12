<template>
  <div id="view" :style="viewStyle" @click="onClick">
    <div class="l-contentWrapper" :class="contentWrapperClass">
      <p class="c-infoLink">
        <span
          class="glyphicon glyphicon-info-sign"
          data-toggle="modal"
          data-target="#infoModal"
        ></span>
      </p>
      <div class="c-blackBox" @click.stop.prevent>
        <region-selector
          :region="region"
          @change="onRegionChange"
          @click.stop.prevent
        ></region-selector>
      </div>
      <div class="c-blackBox">
        <clocks
          :unixtime="currentUnixtime"
          :region="region"
          class="text-center"
        ></clocks>
      </div>
      <div class="c-blackBox">
        <region-pointer :region="region"></region-pointer>
      </div>
      <photo-info :link="photoLink"></photo-info>
    </div>
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
      regions: CONSTANTS.REGIONS,
      hideOnMobile: false
    };
  },
  computed: {
    ...mapState(["region", "currentUnixtime"]),
    contentWrapperClass() {
      return {
        hideOnMobile: this.hideOnMobile
      };
    },
    photoLink() {
      const region = this.region || CONSTANTS.REGIONS[CONSTANTS.DEFAULT_REGION];
      const localTime = functions.getLocalTime(region, this.currentUnixtime);
      const dayOrNight = functions.getDayOrNight(localTime);
      return CONSTANTS.REGIONS[region].photoLink[dayOrNight];
    },
    viewStyle() {
      const region = this.region || CONSTANTS.REGIONS[CONSTANTS.DEFAULT_REGION];
      const localTime = functions.getLocalTime(region, this.currentUnixtime);
      const dayOrNight = functions.getDayOrNight(localTime);
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
        };
        if (
          typeof currentRegion === "string" &&
          typeof CONSTANTS.REGIONS[currentRegion] === "object"
        ) {
          payload.region = currentRegion;
        }
        this.$store.dispatch("selectRegion", payload);
      },
      immediate: true
    }
  },
  methods: {
    onClick() {
      this.hideOnMobile = !this.hideOnMobile;
    },
    getBackgroundImagePath(region) {
      const localTime = functions.getLocalTime(region, this.currentUnixtime);
      const dayOrNight =
        localTime.getHours() < 6 || 18 < localTime.getHours() ? "night" : "day";
      return `./img/background/${dayOrNight}/${region}.jpg`;
    },
    onRegionChange(payload) {
      this.$router.push({
        path: "/",
        query: {
          region: payload.region
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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

.l-contentWrapper {
  opacity: 1;
  transition: all 200ms ease-out;
  @media screen and (max-width: 768px) {
    &.hideOnMobile {
      opacity: 0;
    }
  }
}

.c-blackBox {
  background-color: rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 769px) {
    width: 280px;
  }
  margin: 0 0 1px auto;
  padding: 20px;
}

.c-infoLink {
  text-align: right;
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
