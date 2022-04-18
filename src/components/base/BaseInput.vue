<template>
  <div class="base-input" :class="classes">
    <transition name="fade">
      <div v-if="hasError" class="base-input__error">
        <span class="base-input__error-text">
          {{ error }}
        </span>
      </div>
    </transition>
    <div class="base-input__field">
      <input
        :id="internalId"
        :readonly="readonly"
        :disabled="disabled"
        :value="value"
        :placeholder="placeholder"
        :type="type"
        :required="required"
        v-on="listeners"
        v-bind="$attrs"
        class="base-input__input"
      />

      <div v-if="$slots.end" class="base-input__end">
        <slot name="end"></slot>
      </div>
    </div>
    <label
      v-if="label || $slots.default"
      :for="internalId"
      class="base-input__label"
    >
      <span class="base-input__label-text">
        <slot>{{ label }}</slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseInput",

  props: {
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        return ["text", "email", "tel", "password", "number", "date"].includes(
          value
        );
      },
    },
    id: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      internalId: this.id || `uid_${(~~(Math.random() * 1e8)).toString(16)}`,
    };
  },

  computed: {
    classes() {
      const prefix = "base-input";
      return {
        [`${prefix}--dense`]: this.dense,
        [`${prefix}--disabled`]: this.disabled,
        hasError: this.hasError,
      };
    },
    listeners() {
      return Object.assign({}, this.$listeners, {
        input: (event) => this.onInput(event),
        change: (event) => this.onChange(event),
      });
    },
    hasError() {
      return !!this.error;
    },
  },

  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
      this.$emit("update:error", null);
    },
    onChange(event) {
      this.$emit("change", event.target.value);
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';

.base-input {
  max-width: 100%;
  transition: all 0.3s ease;
  padding-bottom: 21px;
  flexy(flex-start, flex-start, nowrap, column-reverse);
  relative();

  &__field {
    width: 100%;
    relative();
  }

  &__input {
    display: block;
    width: 100%;
    font-size: $font-size-small;
    font-weight: 300;
    line-height: 1.3;
    color: $color-dark.base;
    background: $color-purple.light;
    outline: none;
    border: 1px solid transparent;
    box-sizing: border-box;
    appearance: none;
    transition: all 0.3s;
    border-radius: $border-radius-base;
    padding: 10px;

    ^[0]--dense & {
      padding: 8px 10px;
    }

    ^[0].hasError & {
      border: 1px solid $color-red.base;
    }

    &[type="date"]::-webkit-clear-button,
    &[type="date"]::-webkit-inner-spin-button {
      display: none;
    }

    &[type="number"]::-webkit-inner-spin-button {
      display: none;
    }

    &::placeholder {
      color: $color-gray.base;
    }

    &:read-only {
      color: $color-gray.light;
    }

    &:hover {
      box-shadow: $box-shadow-base;
    }

    &:focus, &:active {
      border: 1px solid $color-purple.base;
      box-shadow: $box-shadow-base;
    }

    &:disabled {
      &:hover {
        box-shadow: none;
      }

      &:focus, &:active {
        box-shadow: none;
        border: 1px solid transparent;
      }
    }
  }

  &__end {
    height: 100%;
    flexy(flex-start, center);
    absolute(0px, false, false, 0px);
  }

  &__label {
    display: block;
    width: 100%;
    margin-bottom: 5px;

  }
  &__label-text {
    display: block;
    line-height: 1.3;
    font-size: $font-size-small;
  }

  &__error {
    absolute(false, 0px, 0px);
  }

  &__error-text {
    white-space: pre-wrap;
    font-size: $font-size-small;
    color: $color-red.base;
  }

  &--disabled {
    opacity: 0.5;
  }
}
</style>
