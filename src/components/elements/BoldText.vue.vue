<template>
  <span class="mp-heading mp-heading--6">{{ text }}</span>
</template>

<script>
export default {
  name: "BoldText",

  props: {
    text: {
      type: [String, Number],
      default: null,
    },
  },
};
</script>
