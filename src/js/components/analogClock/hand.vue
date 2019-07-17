<template>
  <div
    class="hand"
    :style="handStyle"
    :class="handClass"
  ></div>
</template>

<script>
const HANDS_TYPES = {
  HOUR: "hour",
  MINUTE: "minute",
  SECOND: "second"
};
export default {
  name: "watchHand",
  props: {
    handType: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    handClass() {
      return {
        hour: this.handType === HANDS_TYPES.HOUR,
        minute: this.handType === HANDS_TYPES.MINUTE,
        second: this.handType === HANDS_TYPES.SECOND
      };
    },
    handStyle() {
      const angle =
        this.handType === HANDS_TYPES.HOUR
          ? (this.value % 12) * 30
          : this.value * 6;
      return {
        transform: "rotateZ(" + angle + "deg)"
      };
    }
  }
};
</script>
<style>
.hand {
  position: absolute;
  width: 2px;
  height: 45%;
  left: 50%;
  top: 5%;
  background: #fff;
  transform-origin: bottom;
}

.hour {
  height: 30%;
  top: 20%;
}

.second {
  width: 1px;
  height: 40%;
  top: 10%;
}
</style>
