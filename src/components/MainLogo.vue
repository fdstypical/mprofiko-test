<template>
  <component :is="tag" :to="to" class="main-logo">
    <img :src="require('@/assets/images/logo.png')" class="main-logo__icon" />
  </component>
</template>

<script>
export default {
  name: "MainLogo",

  props: {
    to: {
      type: [String, Object],
      default: null,
    },
  },

  computed: {
    tag() {
      return this.to ? "router-link" : this.$attrs.href ? "a" : "div";
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';

.main-logo {
  display: block;
  size(100px, 23px);

  &__icon {
    size(100%);
  }
}
</style>
