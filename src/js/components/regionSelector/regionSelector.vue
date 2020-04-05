<template>
  <select
    name="region"
    v-model="selectedRegion"
    @change="onChange"
  >
    <option
      value="-1"
      disabled
    >select Region</option>
    <option
      v-for="(region, index) in regions"
      :key="index"
      :value="index"
    >{{region.label}}</option>
  </select>
</template>

<script>
import CONSTANTS from "@js/utils/constants";
export default {
  name: "regionSelector",
  props: {
    region: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      regions: CONSTANTS.REGIONS,
      selectedRegion: ""
    };
  },
  mounted() {
    this.selectedRegion = this.region;
  },
  methods: {
    onChange(e) {
      const payload = {
        region: this.selectedRegion
      };
      this.$emit("change", payload);
    }
  }
};
</script>

<style lang="scss">
select {
  background: none;
  color: #fff;
  border: none;
  border-bottom: 1px solid #ffffff;
  outline: none;
  width:100%;
  display: block;
  font-size:16px;
}
option {
  color: #262626;
}
</style>