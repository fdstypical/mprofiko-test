<template>
  <div class="empty-layout">
    <main class="empty-layout__main" role="main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "EmptyLayout",
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/mixins';

.empty-layout {
  width: 100%;
  min-height: 100vh;
  flexy(flex-start, flex-start, nowrap, column);

  &__main {
    width: 100%;
    flex: 1 1 auto;
  }
}
</style>
