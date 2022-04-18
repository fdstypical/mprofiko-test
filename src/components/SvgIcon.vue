<template>
  <svg
    class="svg-icon"
    :class="classes"
    v-bind="iconSettings"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="`#${name}`" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",

  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    stroked: {
      type: Boolean,
      default: false,
    },
    filled: {
      type: Boolean,
      default: true,
    },
    iconSettings: {
      type: Object,
      default: null,
    },
  },

  computed: {
    classes() {
      const prefix = "svg-icon";
      return {
        [`${prefix}--${this.name}`]: true,
        [`${prefix}--filled`]: this.filled,
        [`${prefix}--stroked`]: this.stroked,
      };
    },
  },

  watch: {
    name: async function (value) {
      await this.fetch(value);
    },
  },

  async beforeMount() {
    await this.fetch(this.name);
  },

  methods: {
    async fetch(name) {
      await require(`@/assets/icons/${name}.svg`);
    },
  },
};
</script>

<style lang="stylus">
@require '~@/assets/stylus/vars/variables';

.svg-icon {
  font-size: inherit;
  width: 1em;
  height: 1em;

  &--filled {
    fill: currentColor;
  }

  &--stroked {
    stroke: currentColor;
  }
}
</style>
