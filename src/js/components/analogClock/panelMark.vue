<template>
  <div class="analogClockPanelMark" :style="markStyle" :class="markClass"></div>
</template>

<script>
export default {
  name: 'analogClockPanelMark',
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    markClass() {
      return {
        bold: this.index % 15 === 0,
      };
    },
    markStyle() {
      return {
        transform: 'rotateZ(' + this.index * 6 + 'deg)',
      };
    },
  },
};
</script>
