<template>
  <p class="photoInfo">
    Photo info:
    <a class="photoInfo__authorLink" :href="link" target="_blank">{{ link }}</a>
  </p>
</template>

<script>
import constants from '@js/utils/constants';
export default {
  name: 'photoInfo',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
