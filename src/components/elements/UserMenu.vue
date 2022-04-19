<template>
  <div class="user-menu" @click="toggle">
    <div class="user-menu__user">
      <span class="mp-text mp-text--small">{{ name }}</span>
    </div>

    <div class="user-menu__icon-wrapper" :style="iconStyles">
      <svg-icon name="arrow" class="user-menu__icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserMenu",

  props: {
    name: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      show: false,
    };
  },

  computed: {
    iconStyles() {
      return {
        transform: `rotate(${this.show ? "180deg" : "0deg"})`,
      };
    },
  },

  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';

.user-menu {
  width: 100%;
  flexy(flex-start, center);
  cursor: pointer;

  &__user {
    margin-right: 6px;
  }

  &__icon-wrapper {
    transition: transform 0.3s ease;
  }

  &__icon {
    font-size: $font-size-small-s;
  }
}
</style>
