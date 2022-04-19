<template>
  <div class="base-layout">
    <div class="base-layout__header">
      <main-header>
        <template #start>
          <main-logo :to="{ name: 'home' }" />
        </template>

        <template>
          <main-nav />
        </template>

        <template #end>
          <user-menu name="denis_kaneev" />
        </template>
      </main-header>
    </div>
    <main class="base-layout__main l-container" role="main">
      <router-view class="base-layout__content" />
    </main>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
};
</script>

<style lang="stylus" scoped>
.base-layout {
  width: 100%;
  min-height: 100vh;
  flexy(flex-start, flex-start, nowrap, column);

  &__header {
    width: 100%;
    flex: 0 0 auto;
    box-shadow: 0px 1px 2px rgba(50, 38, 51, 0.25);
  }

  &__main {
    relative()
    padding-top: 40px;
    width: 100%;
    flex: 1 1 auto;
  }
}
</style>
