<template>
  <div class="dropdown">
    <base-button
      title="Настройки"
      theme="plain"
      shape="square"
      size="small"
      align="left"
      wide
    />
    <div class="dropdown__hr" />
    <base-button
      title="Выход"
      theme="plain"
      shape="square"
      size="small"
      align="left"
      wide
    />
  </div>
</template>

<script>
export default {
  name: "Dropdown",
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';

.dropdown {
  max-width: 150px;
  min-width: 130px;
  display: block;
  padding: 4px 0px;
  background-color: $color-light.base;
  border-radius: $border-radius-base;
  box-shadow: $box-shadow-dark;

  &__hr {
    width: 100%;
    height: 1px;
    background-color: $color-gray.base;
    margin: 4px 0px;
  }
}
</style>
