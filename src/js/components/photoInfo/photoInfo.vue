<template>
  <p class="photo_author_link_wrapper">
    Photo info: <a
      class="photo_author_link"
      :href="link"
      target="_blank"
    >{{ link }}</a>
  </p>
</template>

<script>
import CONSTANTS from "@js/utils/constants";
export default {
  name: "photoInfo",
  props: {
    region: {
      type: String,
      required: true
    }
  },
  computed: {
    link() {
      return CONSTANTS.REGIONS[this.region].photoLink;
    }
  }
};
</script>

<style lang="scss">
.photo_author_link_wrapper {
  position: fixed;
  bottom: 5px;
  right: 5px;
  margin: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px;
  font-size: 12px;
}

.photo_author_link {
  color: #fff;
  &:hover {
    color: #fff;
  }
}
</style>