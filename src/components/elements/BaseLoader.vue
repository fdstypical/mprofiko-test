<template>
  <div class="base-loader"></div>
</template>

<script>
export default {
  name: "BaseLoader",
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';

.base-loader {
  font-size: inherit;
  line-height: 1;
  margin: 1em auto;
  circle(1em);
  color: $color-purple.base;
  border: 0.2em solid currentColor;
  border-left-color: transparent;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
