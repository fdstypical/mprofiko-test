<template>
  <img :src="src" :alt="alt" class="base-image" />
</template>

<script>
export default {
  name: "BaseImage",

  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
  },
};
</script>
