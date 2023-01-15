<template>
  <div class="analogClock">
    <div class="analogClock__background">
      <panel-mark v-for="(item, index) in 30" :key="index" :index="index"> </panel-mark>
    </div>
    <div class="analogClock__hands">
      <analog-clock-hand hand-type="hour" :value="datetimeObject.hour"></analog-clock-hand>
      <analog-clock-hand hand-type="minute" :value="datetimeObject.minute"></analog-clock-hand>
      <analog-clock-hand hand-type="second" :value="datetimeObject.second"></analog-clock-hand>
    </div>
  </div>
</template>

<script>
import panelMark from '@js/components/analogClock/panelMark';
import analogClockHand from '@js/components/analogClock/analogClockHand';
export default {
  name: 'analogClock',
  components: {
    panelMark,
    analogClockHand,
  },
  props: {
    datetime: {
      type: Date,
      required: true,
    },
  },
  computed: {
    datetimeObject() {
      const _datetime = new Date(this.datetime);
      return {
        hour: _datetime.getHours(),
        minute: _datetime.getMinutes(),
        second: _datetime.getSeconds(),
      };
    },
  },
};
</script>
