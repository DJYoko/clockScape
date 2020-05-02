<template>
  <div>
    <img src="img/worldmap.svg">
    <div
      class="pointer"
      :style="pointerStyle"
    ></div>
  </div>
</template>

<script>
import constants from "@js/utils/constants";
export default {
  name: "regionPointer",
  props: {
    region: {
      type: String,
      required: true
    }
  },
  computed: {
    latlng() {
      return constants.REGIONS[this.region].latlng; //second
    },
    pointerStyle() {
      return {
        top: constants.REGIONS[this.region].position[0] + "%",
        left: constants.REGIONS[this.region].position[1] + "%"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
  padding: 0;
  img {
    display: block;
    width: 100%;
  }
  .pointer {
    position: absolute;
    width: 10px;
    height: 10px;
    margin-top: -5px;
    margin-left: -5px;
    background-color: #FFC107;
    border-radius: 10px;
    opacity: 1;
    transition: all 1000ms;
    animation: ripple 700ms infinite;
  }

  @-webkit-keyframes ripple {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(2);
    }
  }

  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
}
</style>