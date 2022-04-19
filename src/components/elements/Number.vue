<template>
  <div class="number" :class="classes">
    <span class="number__text">{{ num }}</span>
  </div>
</template>

<script>
export default {
  name: "Number",
  props: {
    num: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      const prefix = "number";

      return {
        [`${prefix}--disabled`]: this.disabled,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';

.number {
  display: block;
  size(27px, 39px);
  background-color: $color-lilac.base;
  border-radius: $border-radius-base;
  transition: all 0.3s ease;
  flexy(center, center);
  cursor: pointer;

  &__text {
    font-weight: 700;
    line-height: 1.35;
    font-size: $font-size-base;
    color: $color-light.base;
  }

  &:hover {
    box-shadow: $box-shadow-alternative;
    background-color: $color-lilac.dark;
  }

  &--disabled {
    background-color: $color-gray.base;

    &:hover {
      box-shadow: none;
    }
  }
}
</style>
