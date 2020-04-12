<template>
  <p class="c-photoInfo">
    Photo info:
    <a class="c-photoInfo__authorLink" :href="link" target="_blank">{{
      link
    }}</a>
  </p>
</template>

<script>
import CONSTANTS from "@js/utils/constants";
export default {
  name: "photoInfo",
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.c-photoInfo {
  padding: 20px;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 5px;
    right: 5px;
    margin: 0;
    padding: 2px;
  }

  &__authorLink {
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
</style>
