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
    link: {
      type: String,
      required: true
    },
  }
};
</script>

<style lang="scss" scoped>
.photo_author_link_wrapper {
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

.photo_author_link {
  color: #fff;
  &:hover {
    color: #fff;
  }
}
</style>