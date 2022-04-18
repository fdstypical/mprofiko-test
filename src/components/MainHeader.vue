<template>
  <header class="main-header l-container">
    <div class="main-header__content">
      <div class="main-header__start">
        <slot name="start" />
      </div>

      <div v-if="$slots.default" class="main-header__center">
        <slot />
      </div>

      <div class="main-header__end">
        <slot name="end" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';

.main-header {
  padding-top: $gutter-sm;
  padding-bottom: $gutter-sm;

  &__content {
    flexy(space-between, flex-end);
  }

  &__center {
    width: 100%;
    padding: 0px 30px;
  }
}
</style>
