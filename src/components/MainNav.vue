<template>
  <div class="main-nav">
    <nav class="main-nav__list">
      <router-link
        v-for="(item, i) in $options.routes"
        :to="{ name: item.name }"
        :key="i"
        class="main-nav__link"
      >
        {{ item.label }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNav",

  routes: [
    { name: "home", label: "Клиенты" },
    { name: "staff", label: "Сотрудники" },
  ],
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';

.main-nav {
  flexy(flex-start, flex-start, nowrap, column);

  &__list {
    padding: 0px 20px;
  }

  &__link {
    font-size: $font-size-base;
    color: $color-dark.base;
    padding: 5px 0px;
    margin-right: 20px;
    transition: color 0.3s;
    text-decoration: none;
    font-weight: 400;

    &.router-link-exact-active {
      color: $color-lilac.base;
      font-weight: 700;
    }

    &:last-child {
      margin-right: 0px;
    }

    &:hover {
      color: $color-lilac.dark;
    }
  }
}
</style>
