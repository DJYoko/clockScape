<template>
  <div class="c-digitalClock">
    <clock-number
      class="c-digitalClock__part"
      :value="Number(yymmdd[0])"
    ></clock-number>
    <clock-number
      class="c-digitalClock__part"
      :value="Number(yymmdd[1])"
    ></clock-number>
    <clock-colon class="c-digitalClock__part"></clock-colon>
    <clock-number
      class="c-digitalClock__part"
      :value="Number(yymmdd[2])"
    ></clock-number>
    <clock-number
      class="c-digitalClock__part"
      :value="Number(yymmdd[3])"
    ></clock-number>
    <clock-colon class="c-digitalClock__part"></clock-colon>
    <clock-number
      class="c-digitalClock__part"
      :value="Number(yymmdd[4])"
    ></clock-number>
    <clock-number
      class="c-digitalClock__part"
      :value="Number(yymmdd[5])"
    ></clock-number>
  </div>
</template>

<script>
import clockNumber from "@js/components/digitalClock/clockNumber";
import clockColon from "@js/components/digitalClock/clockColon";
export default {
  name: "digitalClock",
  components: {
    clockNumber,
    clockColon
  },
  props: {
    datetime: {
      type: Date,
      required: true
    }
  },
  computed: {
    yymmdd() {
      const _datetime = new Date(this.datetime);
      const hour_string = this.zeroPadding(_datetime.getHours(), 2);
      const minute_string = this.zeroPadding(_datetime.getMinutes(), 2);
      const second_string = this.zeroPadding(_datetime.getSeconds(), 2);
      return hour_string + minute_string + second_string;
    }
  },
  methods: {
    zeroPadding(number, length) {
      return (Array(length).join("0") + number).slice(-length);
    }
  }
};
</script>

<style>
.c-digitalClock {
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.c-digitalClock__part {
  display: inline-block;
  vertical-align: bottom;
}
</style>
