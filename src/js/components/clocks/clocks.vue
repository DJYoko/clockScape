<template>
  <div id="clocks_wrapper">
    <analog-clock
      :datetime="datetime"
      style="margin: 0 auto 20px;"
    ></analog-clock>
    <digital-clock :datetime="datetime"></digital-clock>
  </div>
</template>

<script>
import CONSTANTS from "@js/utils/constants";
import functions from "@js/utils/functions";
import analogClock from "@js/components/analogClock/";
import digitalClock from "@js/components/digitalClock/";
export default {
  name: "clocks",
  components: {
    analogClock,
    digitalClock
  },
  props: {
    unixtime: {
      type: Number,
      required: true
    },
    region: {
      type: String,
      required: true
    }
  },
  computed: {
    datetime() {
      return functions.getLocalTime(this.region, this.unixtime)
    }
  }
};
</script>