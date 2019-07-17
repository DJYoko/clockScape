<template>
  <div class="analog_clock">
    <div class="background_display">
      <panel-mark
        v-for="(item, index) in 30"
        :key="index"
        :index="index"
        class="panel_mark"
      >
      </panel-mark>
    </div>
    <div class="hands_container">
      <clock-hand
        hand-type="hour"
        :value="datetimeObject.hour"
      ></clock-hand>
      <clock-hand
        hand-type="minute"
        :value="datetimeObject.minute"
      ></clock-hand>
      <clock-hand
        hand-type="second"
        :value="datetimeObject.second"
      ></clock-hand>
    </div>
  </div>
</template>

<script>
import panelMark from "@js/components/analogClock/panelMark";
import clockHand from "@js/components/analogClock/hand";
export default {
  name: "analogClock",
  components: {
    panelMark,
    clockHand
  },
  props: {
    datetime: {
      type: Date,
      required: true
    }
  },
  computed: {
    datetimeObject() {
      const _datetime = new Date(this.datetime);
      return {
        hour: _datetime.getHours(),
        minute: _datetime.getMinutes(),
        second: _datetime.getSeconds()
      };
    }
  }
};
</script>

<style>
.analog_clock {
  width: 150px;
  height: 150px;
  position: relative;
}

.hands_container,
.background_display {
  width: 100%;
  height: 100%;
}

.background_display {
  position: relative;
}

.hands_container {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
