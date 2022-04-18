<template>
  <component
    :is="tag"
    :to="to"
    class="base-button"
    :class="classes"
    :disabled="disabled"
    v-on="$listeners"
  >
    <base-loader v-if="loading" class="base-button__loader" />
    <div class="base-button__inner">
      <svg-icon
        v-if="icon"
        :name="icon"
        v-bind="iconSettings"
        class="base-button__icon"
      />
      <span v-if="$slots.default || title" class="base-button__text">
        <slot>{{ title }}</slot>
      </span>
    </div>
  </component>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    title: {
      type: String,
      default: null,
    },
    theme: {
      type: String,
      default: "default",
      validator: (value) => ["default", "plain", "outline"].includes(value),
    },
    color: {
      type: String,
      default: "primary",
      validator: (value) =>
        ["light", "dark", "primary", "secondary"].includes(value),
    },
    size: {
      type: String,
      default: "default",
      validator: (value) =>
        ["default", "small", "big", "large"].includes(value),
    },
    shape: {
      type: String,
      default: "rounded",
      validator: (value) => ["square", "circle", "rounded"].includes(value),
    },
    dense: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    wide: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: Object,
      default: null,
      validator: (value) => !value || value.name || value.path,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    iconSettings: {
      type: Object,
      default: null,
    },
  },
  computed: {
    tag() {
      let tag = "button";
      if (this.to) {
        tag = "router-link";
      } else if (this.$attrs.href) {
        tag = "a";
      }
      return tag;
    },
    classes() {
      const prefix = "base-button";
      return {
        [`${prefix}--theme_${this.theme}`]: this.theme,
        [`${prefix}--color_${this.color}`]: this.color,
        [`${prefix}--size_${this.size}`]: this.size,
        [`${prefix}--shape_${this.shape}`]: this.shape,
        loading: this.loading,
        dense: this.dense,
        reverse: this.reverse,
        wide: this.wide,
        shadow: this.shadow,
        plain: this.plain,
        ["only-icon"]: this.icon && !this.title && !this.$slots.default,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/size';
@require '~@/assets/stylus/mixins/buttons';
@require '~@/assets/stylus/mixins/positions';

// colors
$bb-colors-light = {
  base: $theme-light.base,
  base-text: $theme-light.contrast,
  transparent: true,
}

$bb-colors-dark = {
  base: $theme-dark.base,
  base-text: $theme-dark.contrast,
}

$bb-colors-primary = {
  base: $theme-primary.base,
  base-text: $theme-primary.contrast,
  hover: $theme-primary.hover,
  loader: $color-gray.light,
  active-loader: $color-gray.light,
  box-shadow: $box-shadow-alternative,
}

$bb-colors-secondary = {
  base: $theme-secondary.base,
  base-text: $theme-secondary.contrast,
}

$bb-colors-tree = {
  light: $bb-colors-light,
  dark: $bb-colors-dark,
  primary: $bb-colors-primary,
  secondary: $bb-colors-secondary,
};

// themes
$bb-themes = {
  default: generate-default,
  outline: generate-outline,
  plain: generate-plain,
}

// sizes
$bb-size-default = {
  text: $font-size-base,
  height: 19px,
  border: 1px,
  padding: {
    x: 20px,
    y: 10px
  }
}

$bb-size-small = {
  text: $font-size-small,
  height: 15px,
  border: 1px,
  padding: {
    x: 16px,
    y: 9px
  }
}

$bb-size-big = {
  text: $font-size-medium,
  height: 25px,
  border: 1px,
  padding: {
    x: 32px,
    y: 14px
  }
}

$bb-size-large = {
  text: $font-size-medium-alt,
  height: 40px,
  border: 1px,
  padding: {
    x: 60px,
    y: 19px
  }
}

$bb-sizes-tree = {
  default: $bb-size-default,
  small: $bb-size-small,
  big: $bb-size-big,
  large: $bb-size-large,
}

.base-button {
  relative();
  display: inline-block;
  box-shadow: none;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: $border-radius-base;
  font-family: $font-base;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }

  &.wide {
    width: 100%;
  }

  &.loading {
    cursor: default;
    pointer-events: none;
  }

  // shapes
  &--shape_square {
    border-radius: 0;
  }
  &--shape_rounded {
    border-radius: $border-radius-base;
  }

  &__icon {
    pointer-events: none;
    transition: inherit;
  }

  div&__loader {
    font-size: inherit;
    margin: 0;
    absolute(50%, 50%);
    margin-left: -0.5em;
    margin-top: -0.5em;
  }

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    transition: inherit;

    ^[0].loading & {
      opacity: 0;
    }

    ^[0].reverse & {
      flex-direction: row-reverse;
    }
  }

  &__text {
    font-weight: 700;
    pointer-events: none;
    transition: none;

    ^[0]__icon + & {
      margin-left: 6px;

      ^[0].reverse & {
        margin-left: 0
        margin-right: 6px;
      }
    }
  }

  // themes & colors
  for $theme, $mixin in $bb-themes {
    &--theme_{$theme} {
      for $key, $scheme in $bb-colors-tree {
        ^[0]--color_{$key}& {
          $mixin($scheme, $key)

          &.shadow {
            box-shadow: $scheme.box-shadow;
          }
        }
      }
    }
  }

  // sizes & shapes
  for $key, $size in $bb-sizes-tree {
    &--size_{$key} {
      $total = $size.height + $size.border * 2 + $size.padding.y * 2;
      $total-dense = $size.height + $size.border * 2 + $size.padding.y;

      min-size($total);
      border-width: $size.border;
      padding: $size.padding.y $size.padding.x;

      &.dense {
        min-size($total-dense);
        padding: ($size.padding.y / 2) ($size.padding.x / 2);
      }

      ^[0]--shape_circle& {
        border-radius: ($total / 2);
      }

      & ^[0]__text {
        font-size: $size.text;
        line-height: $size.height;
      }

      & ^[0]__loader {
        font-size: $size.height;
      }

      & ^[0]__icon {
        font-size: $size.text;
      }

      &.only-icon {
        padding: $size.padding.y;

        ^[0]--size_small& {
          border-radius: $border-radius-small;
        }

        &.dense {
          padding: ($size.padding.y / 2);
        }

        & ^[0]__icon {
          font-size: $size.height;
        }
      }
    }
  }

  &:disabled {
    pointer-events: none;
    background: $bb-colors-secondary.base;
  }

  &.plain {
    &:hover, &:focus, &:active {
      background: transparent;
    }
  }
}
</style>
