<template>
  <div class="regionPointer">
    <img src="img/worldmap.svg" />
    <div class="pointer" :style="pointerStyle"></div>
  </div>
</template>

<script>
import constants from '@js/utils/constants';
export default {
  name: 'regionPointer',
  props: {
    region: {
      type: String,
      required: true,
    },
  },
  computed: {
    latlng() {
      return constants.REGIONS[this.region].latlng; //second
    },
    pointerStyle() {
      return {
        top: constants.REGIONS[this.region].position[0] + '%',
        left: constants.REGIONS[this.region].position[1] + '%',
      };
    },
  },
};
</script>
