<template>
  <div class="c-analogClock">
    <div class="c-analogClock__background">
      <panel-mark
        v-for="(item, index) in 30"
        :key="index"
        :index="index"
      >
      </panel-mark>
    </div>
    <div class="c-analogClock__hands">
      <clock-hand hand-type="hour" :value="datetimeObject.hour"></clock-hand>
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

<style lang="scss" scoped>
.c-analogClock {
  width: 150px;
  height: 150px;
  position: relative;

  &__hands,
  &__background {
    width: 100%;
    height: 100%;
  }

  &__background {
    position: relative;
  }

  &__hands {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
