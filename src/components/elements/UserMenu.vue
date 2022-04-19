<template>
  <div
    class="user-menu"
    :class="classes"
    :aria-disabled="disabled"
    @click="toggle"
  >
    <div class="user-menu__user">
      <span class="mp-text mp-text--small">{{ name }}</span>
    </div>

    <div class="user-menu__icon-wrapper" :style="iconStyles">
      <svg-icon name="arrow" class="user-menu__icon" />
    </div>

    <transition name="fade">
      <dropdown v-if="show" class="user-menu__dropdown" />
    </transition>
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      show: false,
    };
  },

  computed: {
    classes() {
      return {
        disabled: this.disabled,
      };
    },
    iconStyles() {
      return {
        transform: `rotate(${this.show ? "180deg" : "0deg"})`,
      };
    },
  },

  methods: {
    toggle() {
      if (!this.disabled) {
        this.show = !this.show;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';

.user-menu {
  width: 100%;
  relative();
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

  &__dropdown {
    absolute(30px, false, false, 0px);
  }

  &.disabled {
    opacity: 0.5;
  }
}
</style>
