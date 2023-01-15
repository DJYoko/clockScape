<template>
  <div class="clockNumber" :style="numberStyle"></div>
</template>

<script>
export default {
  name: 'clockNumber',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    numberStyle() {
      const style = {
        backgroundPosition: this.value * 10 + '%' + ' 50%',
      };
      return style;
    },
  },
};
</script>
