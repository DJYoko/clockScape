<template>
  <select class="regionSelector" name="region" v-model="selectedRegion" @change="evtChange">
    <option value="-1" disabled>select Region</option>
    <option v-for="(region, index) in regions" :key="index" :value="index">{{ region.label }}</option>
  </select>
</template>

<script>
import constants from '@js/utils/constants';
export default {
  name: 'regionSelector',
  props: {
    region: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      regions: constants.REGIONS,
      selectedRegion: '',
    };
  },
  mounted() {
    this.selectedRegion = this.region;
  },
  methods: {
    evtChange() {
      this.$emit('evtChange', {
        region: this.selectedRegion,
      });
    },
  },
};
</script>
