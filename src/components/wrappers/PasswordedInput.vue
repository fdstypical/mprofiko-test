<template>
  <div class="passworded-input">
    <base-input v-bind="$attrs" v-on="$listeners" :type="type">
      <template #end>
        <base-button
          theme="plain"
          size="small"
          color="dark"
          type="button"
          plain
          :icon="icon"
          @click="toggleShow"
        />
      </template>
    </base-input>
  </div>
</template>

<script>
export default {
  name: "PasswordedInput",

  data() {
    return {
      show: false,
    };
  },

  computed: {
    type() {
      return this.show ? "text" : "password";
    },
    icon() {
      return this.show ? "open-eye" : "close-eye";
    },
  },

  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="stylus" scoped>
.passworded-input {
  width: 100%;
}
</style>
