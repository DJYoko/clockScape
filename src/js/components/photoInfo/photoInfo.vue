<template>
  <p class="photoInfo">
    Photo info:
    <a class="authorLink" :href="link" target="_blank">{{ link }}</a>
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
.photoInfo {
  padding: 20px;
  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 5px;
    right: 5px;
    margin: 0;
    padding: 2px;
  }

  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  font-size: 12px;
}

.authorLink {
  color: #fff;
  &:hover {
    color: #fff;
  }
}
</style>
